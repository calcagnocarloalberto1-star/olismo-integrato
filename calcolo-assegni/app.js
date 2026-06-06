'use strict';

/* ============ UTILITIES ============ */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

const fmtEur = (n) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(n));
const fmtNum = (n) => new Intl.NumberFormat('it-IT', { maximumFractionDigits: 0 }).format(Math.round(n));
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const pct = (v) => (v * 100).toFixed(0) + '%';

const DISCLAIMER = 'Strumento orientativo. Il calcolo non sostituisce la valutazione del giudice ex art. 337-ter c.c. e dei criteri giurisprudenziali (Cass. SU 18287/2018). Risultato non vincolante.';

const TENORE_LABEL = { basso: 'Basso', medio: 'Medio', medioalto: 'Medio-alto', alto: 'Alto' };
const CAP_LABEL = { piena: 'Piena', ridotta: 'Ridotta', nulla: 'Nulla' };
const CONTRIB_LABEL = { determinante: 'Determinante', significativo: 'Significativo', moderato: 'Moderato', marginale: 'Marginale' };
const RINUNCE_LABEL = { ingenti: 'Ingenti', significativi: 'Significativi', lievi: 'Lievi', nessuno: 'Nessuno' };
const ESIG_LABEL = { basse: 'Basse', medie: 'Medie', alte: 'Alte' };

/* Holds last computed result per module for PDF export */
const lastResult = { coniuge: null, divorzile: null, figli: null };

/* ============ NAVIGATION ============ */
const views = ['home', 'coniuge', 'divorzile', 'figli'];

function showView(name) {
  if (!views.includes(name)) name = 'home';
  views.forEach((v) => {
    const el = $('#view-' + v);
    if (el) el.hidden = v !== name;
  });
  $$('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === name));
  $('#mobile-nav').hidden = true;
  $('#nav-toggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'auto' : 'auto' });
}

function initNav() {
  $$('[data-view]').forEach((el) => el.addEventListener('click', () => showView(el.dataset.view)));
  $('#brand-home').addEventListener('click', () => showView('home'));
  $('#nav-toggle').addEventListener('click', () => {
    const mn = $('#mobile-nav');
    mn.hidden = !mn.hidden;
    $('#nav-toggle').setAttribute('aria-expanded', String(!mn.hidden));
  });
  showView('home');
}

/* ============ THEME ============ */
function initTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) document.documentElement.classList.add('dark');
  $('#theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
}

/* ============ VALIDATION HELPERS ============ */
function setError(input, msg) {
  const field = input.closest('.field');
  if (!field) return;
  field.classList.toggle('invalid', !!msg);
  const err = $('[data-err]', field);
  if (err) err.textContent = msg || '';
}

function validateNumber(input, { required = false, min = 0, max = Infinity, label = '' } = {}) {
  const raw = input.value.trim();
  if (raw === '') {
    if (required) { setError(input, 'Campo obbligatorio.'); return null; }
    setError(input, ''); return 0;
  }
  const v = Number(raw);
  if (Number.isNaN(v)) { setError(input, 'Inserire un valore numerico.'); return null; }
  if (v < min) { setError(input, `Il valore non può essere inferiore a ${min}.`); return null; }
  if (v > max) { setError(input, `Il valore non può superare ${max}.`); return null; }
  setError(input, '');
  return v;
}

/* ============ MODULE 1 — MANTENIMENTO CONIUGE ============ */
function calcConiuge(d) {
  const diff = Math.max(0, d.reddObb - d.reddRic);
  const steps = [];
  let coeff = 0.35; // base 35%
  steps.push({ label: 'Coefficiente base in separazione (35% del differenziale reddituale)', v: 0.35 });

  if (d.durata > 20) { coeff += 0.05; steps.push({ label: 'Durata del matrimonio superiore a 20 anni', v: 0.05 }); }
  else if (d.durata >= 10) { steps.push({ label: 'Durata del matrimonio tra 10 e 20 anni', v: 0 }); }
  else { coeff -= 0.05; steps.push({ label: 'Durata del matrimonio inferiore a 10 anni', v: -0.05 }); }

  if (d.capacita === 'nulla') { coeff += 0.05; steps.push({ label: 'Capacità lavorativa del richiedente nulla', v: 0.05 }); }
  else if (d.capacita === 'ridotta') { coeff += 0.02; steps.push({ label: 'Capacità lavorativa del richiedente ridotta', v: 0.02 }); }
  else { coeff -= 0.03; steps.push({ label: 'Capacità lavorativa del richiedente piena', v: -0.03 }); }

  if (d.eta > 60) { coeff += 0.03; steps.push({ label: 'Età del richiedente superiore a 60 anni', v: 0.03 }); }

  if (d.figli) {
    const add = clamp(0.02 * d.figliNum, 0, 0.06);
    coeff += add;
    steps.push({ label: `Presenza di ${d.figliNum} figlio/i a carico (+2% per figlio, max +6%)`, v: add });
  }

  const tenAdd = { alto: 0.03, medioalto: 0.01, medio: 0, basso: -0.02 }[d.tenore];
  if (tenAdd !== 0) steps.push({ label: `Tenore di vita matrimoniale: ${TENORE_LABEL[d.tenore].toLowerCase()}`, v: tenAdd });
  coeff += tenAdd;

  const coeffClamped = clamp(coeff, 0.15, 0.50);
  const clamped = coeffClamped !== coeff;
  const monthly = diff * coeffClamped;
  const min = monthly * 0.85, max = monthly * 1.15;

  return {
    type: 'Assegno di mantenimento per il coniuge (separazione)',
    monthly, annual: monthly * 12, min, max,
    coeff: coeffClamped, coeffRaw: coeff, clamped, diff, steps, data: d,
    motivIntro: `Il calcolo muove dal differenziale reddituale di ${fmtEur(diff)} mensili tra il coniuge obbligato (${fmtEur(d.reddObb)}) e il coniuge richiedente (${fmtEur(d.reddRic)}). In regime di separazione l'assegno di mantenimento è orientato a preservare il tenore di vita goduto in costanza di matrimonio, modulato secondo i criteri sotto indicati. Il coefficiente complessivo applicato è del ${pct(coeffClamped)}${clamped ? ' (valore ricondotto entro i limiti del 15%–50%)' : ''}.`,
  };
}

/* ============ MODULE 2 — ASSEGNO DIVORZILE ============ */
function calcDivorzile(d) {
  const diff = Math.max(0, d.reddObb - d.reddRic);
  const steps = [];
  let coeff = 0.30; // base 30%
  steps.push({ label: 'Coefficiente base divorzile (30% del differenziale reddituale)', v: 0.30 });

  if (d.durata > 20) { coeff += 0.05; steps.push({ label: 'Durata del matrimonio superiore a 20 anni', v: 0.05 }); }
  else if (d.durata >= 10) { steps.push({ label: 'Durata del matrimonio tra 10 e 20 anni', v: 0 }); }
  else { coeff -= 0.05; steps.push({ label: 'Durata del matrimonio inferiore a 10 anni', v: -0.05 }); }

  if (d.capacita === 'nulla') { coeff += 0.05; steps.push({ label: 'Capacità lavorativa del richiedente nulla', v: 0.05 }); }
  else if (d.capacita === 'ridotta') { coeff += 0.02; steps.push({ label: 'Capacità lavorativa del richiedente ridotta', v: 0.02 }); }
  else { coeff -= 0.03; steps.push({ label: 'Capacità lavorativa del richiedente piena', v: -0.03 }); }

  if (d.eta > 60) { coeff += 0.03; steps.push({ label: 'Età del richiedente superiore a 60 anni', v: 0.03 }); }

  if (d.figli) {
    const add = clamp(0.02 * d.figliNum, 0, 0.06);
    coeff += add;
    steps.push({ label: `Presenza di ${d.figliNum} figlio/i a carico (+2% per figlio, max +6%)`, v: add });
  }

  const tenAdd = { alto: 0.03, medioalto: 0.01, medio: 0, basso: -0.02 }[d.tenore];
  if (tenAdd !== 0) steps.push({ label: `Tenore di vita matrimoniale: ${TENORE_LABEL[d.tenore].toLowerCase()}`, v: tenAdd });
  coeff += tenAdd;

  const compMap = { determinante: 0.08, significativo: 0.04, moderato: 0.01, marginale: -0.02 };
  const compAdd = compMap[d.contributo];
  coeff += compAdd;
  steps.push({ label: `Componente compensativa — contributo ${CONTRIB_LABEL[d.contributo].toLowerCase()} alla vita familiare e alla formazione del patrimonio comune`, v: compAdd });

  const pereqMap = { ingenti: 0.06, significativi: 0.03, lievi: 0.01, nessuno: 0 };
  const pereqAdd = pereqMap[d.rinunce];
  coeff += pereqAdd;
  if (pereqAdd !== 0) steps.push({ label: `Componente perequativa — rinunce e sacrifici professionali ${RINUNCE_LABEL[d.rinunce].toLowerCase()}`, v: pereqAdd });

  const coeffClamped = clamp(coeff, 0.10, 0.50);
  const clamped = coeffClamped !== coeff;
  const monthly = diff * coeffClamped;
  const min = monthly * 0.85, max = monthly * 1.15;

  return {
    type: 'Assegno divorzile',
    monthly, annual: monthly * 12, min, max,
    coeff: coeffClamped, coeffRaw: coeff, clamped, diff, steps, data: d,
    motivIntro: `Il calcolo è condotto in linea con i principi affermati dalle Sezioni Unite della Corte di Cassazione con la sentenza n. 18287/2018, che riconoscono all'assegno divorzile una triplice funzione — assistenziale, compensativa e perequativa. Muovendo dal differenziale reddituale di ${fmtEur(diff)} mensili, la componente assistenziale è modulata per durata, età e capacità lavorativa; la componente compensativa valorizza il contributo (${CONTRIB_LABEL[d.contributo].toLowerCase()}) fornito dal richiedente alla conduzione familiare e alla formazione del patrimonio comune; la componente perequativa tiene conto delle rinunce professionali (${RINUNCE_LABEL[d.rinunce].toLowerCase()}) sostenute. Il coefficiente complessivo applicato è del ${pct(coeffClamped)}${clamped ? ' (valore ricondotto entro i limiti del 10%–50%)' : ''}.`,
  };
}

/* ============ MODULE 3 — MANTENIMENTO FIGLI ============ */
function fasciaEta(eta) {
  if (eta <= 5) return { base: 400, label: '0–5 anni' };
  if (eta <= 10) return { base: 500, label: '6–10 anni' };
  if (eta <= 13) return { base: 600, label: '11–13 anni' };
  if (eta <= 17) return { base: 750, label: '14–17 anni' };
  return { base: 850, label: '18+ anni (studente non autosufficiente)' };
}

function calcFigli(d) {
  const esigMult = { basse: 0.85, medie: 1.0, alte: 1.20 };
  let totFabbisogno = 0;
  const detail = d.figli.map((f, i) => {
    const fascia = fasciaEta(f.eta);
    const baseAgg = fascia.base * esigMult[f.esigenze];
    const spese = f.scol + f.san + f.sport;
    const tot = baseAgg + spese;
    totFabbisogno += tot;
    return {
      n: i + 1, eta: f.eta, fascia: fascia.label, base: fascia.base,
      esigenze: f.esigenze, baseAgg, scol: f.scol, san: f.san, sport: f.sport, spese, tot,
    };
  });

  const quotaAbitazione = d.abitazione * 0.30;
  const fabbisognoTotale = totFabbisogno + quotaAbitazione;

  const totRedd = d.reddA + d.reddB;
  const quotaA = totRedd > 0 ? d.reddA / totRedd : 0.5;
  const quotaB = 1 - quotaA;

  // Obbligato is the non-collocatario who pays. Collocatario keeps children tempoA% (if A) ...
  // Time the children spend with the obligated parent => costs directly borne during that time.
  const obbligato = d.obbligato; // 'A' or 'B'
  const quotaObb = obbligato === 'A' ? quotaA : quotaB;
  // permanenza presso obbligato:
  const tempoObb = (obbligato === 'A' ? d.tempoA : (100 - d.tempoA)) / 100;

  // Teorico = quota proporzionale del fabbisogno a carico dell'obbligato
  const quotaTeorica = quotaObb * fabbisognoTotale;
  // Riduzione per costi sostenuti direttamente durante la permanenza
  // (solo la quota variabile di fabbisogno, esclusa quota abitazione del collocatario)
  const costiDiretti = tempoObb * totFabbisogno * quotaObb;
  let assegno = quotaTeorica - costiDiretti;
  if (assegno < 0) assegno = 0;

  const min = assegno * 0.85, max = assegno * 1.15;
  const obbLabel = obbligato === 'A' ? 'Genitore A' : 'Genitore B';
  const collLabel = obbligato === 'A' ? 'Genitore B' : 'Genitore A';

  return {
    type: 'Assegno di mantenimento per i figli (art. 337-ter c.c.)',
    monthly: assegno, annual: assegno * 12, min, max,
    detail, totFabbisogno, quotaAbitazione, fabbisognoTotale,
    quotaA, quotaB, quotaObb, tempoObb, costiDiretti, quotaTeorica,
    obbligato, obbLabel, collLabel, data: d,
    motivIntro: `Il contributo è determinato ai sensi dell'art. 337-ter c.c., secondo il principio di proporzionalità rispetto al reddito di ciascun genitore. Il fabbisogno mensile dei figli, calcolato per fascia di età e maggiorato delle spese specifiche e di una quota (30%) del costo dell'abitazione del genitore collocatario, ammonta a ${fmtEur(fabbisognoTotale)}. La quota proporzionale a carico del ${obbLabel} (genitore obbligato), pari al ${pct(quotaObb)} del fabbisogno in ragione del rapporto tra i redditi, è di ${fmtEur(quotaTeorica)}; da essa si detraggono i costi direttamente sostenuti durante la permanenza dei figli presso il medesimo genitore (${pct(tempoObb)} del tempo), pari a ${fmtEur(costiDiretti)}. Il ${collLabel} è il genitore collocatario beneficiario del versamento.`,
  };
}

/* ============ RESULT RENDERING ============ */
function stepsHtml(steps) {
  return steps.map((s) => {
    const sign = s.v > 0 ? '+' : (s.v < 0 ? '' : '');
    const val = s.v === 0 ? '—' : `${sign}${(s.v * 100).toFixed(0)}%`;
    return `<li><span>${s.label}</span> <strong style="margin-left:auto;white-space:nowrap;color:var(--accent)">${val}</strong></li>`;
  }).join('');
}

function renderConiugeOrDivorzile(panel, r, moduleKey) {
  panel.innerHTML = `
    <div class="result-content">
      <div class="result-banner">
        <div class="result-banner-label">Assegno mensile orientativo</div>
        <div class="result-amount"><span class="euro">€</span>${fmtNum(r.monthly)}</div>
        <div class="result-period">al mese · ${fmtEur(r.annual)} all'anno</div>
      </div>
      <div class="result-body">
        <div class="result-stats">
          <div class="result-stat"><div class="result-stat-label">Range minimo (−15%)</div><div class="result-stat-value">${fmtEur(r.min)}</div></div>
          <div class="result-stat"><div class="result-stat-label">Range massimo (+15%)</div><div class="result-stat-value">${fmtEur(r.max)}</div></div>
        </div>
        <div class="result-stats">
          <div class="result-stat"><div class="result-stat-label">Differenziale reddituale</div><div class="result-stat-value">${fmtEur(r.diff)}</div></div>
          <div class="result-stat"><div class="result-stat-label">Coefficiente applicato</div><div class="result-stat-value">${pct(r.coeff)}</div></div>
        </div>
        <div class="result-motiv">
          <h4>Criteri considerati</h4>
          <p>${r.motivIntro}</p>
          <ul style="margin-top:12px">${stepsHtml(r.steps)}</ul>
        </div>
      </div>
      <div class="result-export">
        <button class="btn btn-gold" data-export="${moduleKey}">Esporta PDF</button>
      </div>
    </div>`;
  panel.querySelector('[data-export]').addEventListener('click', () => exportPdf(moduleKey));
}

function renderFigli(panel, r) {
  const rows = r.detail.map((f) => `
    <tr>
      <td>Figlio ${f.n} · ${f.fascia}</td>
      <td class="num">${fmtEur(f.baseAgg)}</td>
      <td class="num">${fmtEur(f.spese)}</td>
      <td class="num">${fmtEur(f.tot)}</td>
    </tr>`).join('');

  panel.innerHTML = `
    <div class="result-content">
      <div class="result-banner">
        <div class="result-banner-label">Assegno mensile orientativo (${r.obbLabel})</div>
        <div class="result-amount"><span class="euro">€</span>${fmtNum(r.monthly)}</div>
        <div class="result-period">al mese · ${fmtEur(r.annual)} all'anno</div>
      </div>
      <div class="result-body">
        <div class="result-stats">
          <div class="result-stat"><div class="result-stat-label">Range minimo (−15%)</div><div class="result-stat-value">${fmtEur(r.min)}</div></div>
          <div class="result-stat"><div class="result-stat-label">Range massimo (+15%)</div><div class="result-stat-value">${fmtEur(r.max)}</div></div>
        </div>
        <div>
          <div class="result-section-title" style="margin-bottom:12px">Dettaglio del fabbisogno per figlio</div>
          <table class="result-detail-table">
            <thead><tr><th>Figlio / fascia</th><th style="text-align:right">Fabbisogno base</th><th style="text-align:right">Spese specifiche</th><th style="text-align:right">Totale</th></tr></thead>
            <tbody>
              ${rows}
              <tr><td>Quota abitazione collocatario (30%)</td><td class="num">—</td><td class="num">—</td><td class="num">${fmtEur(r.quotaAbitazione)}</td></tr>
              <tr class="total"><td>Fabbisogno mensile totale</td><td class="num"></td><td class="num"></td><td class="num">${fmtEur(r.fabbisognoTotale)}</td></tr>
            </tbody>
          </table>
        </div>
        <div class="result-stats">
          <div class="result-stat"><div class="result-stat-label">Quota proporzionale ${r.obbLabel}</div><div class="result-stat-value">${pct(r.quotaObb)}</div></div>
          <div class="result-stat"><div class="result-stat-label">Permanenza presso ${r.obbLabel}</div><div class="result-stat-value">${pct(r.tempoObb)}</div></div>
        </div>
        <div class="result-motiv">
          <h4>Criteri considerati</h4>
          <p>${r.motivIntro}</p>
        </div>
      </div>
      <div class="result-export">
        <button class="btn btn-gold" data-export="figli">Esporta PDF</button>
      </div>
    </div>`;
  panel.querySelector('[data-export]').addEventListener('click', () => exportPdf('figli'));
}

/* ============ FORM HANDLERS ============ */
function readRadio(name, form) { const el = $(`input[name="${name}"]:checked`, form); return el ? el.value : null; }

function bindConiugeLike(prefix, formId, calcFn, moduleKey) {
  const form = $('#' + formId);
  const figliRadios = $$(`input[name="${prefix}-figli"]`, form);
  const numWrap = $(`#${prefix}-figliNumWrap`);
  figliRadios.forEach((r) => r.addEventListener('change', () => {
    numWrap.hidden = readRadio(`${prefix}-figli`, form) !== 'si';
  }));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const reddObb = validateNumber($(`#${prefix}-reddObb`), { required: true, label: 'Reddito obbligato' });
    const reddRic = validateNumber($(`#${prefix}-reddRic`), { required: true, label: 'Reddito richiedente' });
    const patrObb = validateNumber($(`#${prefix}-patrObb`), {});
    const patrRic = validateNumber($(`#${prefix}-patrRic`), {});
    const durata = validateNumber($(`#${prefix}-durata`), { required: true, max: 80 });
    const eta = validateNumber($(`#${prefix}-eta`), { required: true, min: 18, max: 110 });

    if ([reddObb, reddRic, patrObb, patrRic, durata, eta].some((v) => v === null)) return;

    const figli = readRadio(`${prefix}-figli`, form) === 'si';
    const figliNum = figli ? Math.max(1, Number($(`#${prefix}-figliNum`).value) || 1) : 0;

    const base = {
      reddObb, reddRic, patrObb, patrRic, durata, eta,
      capacita: readRadio(`${prefix}-capacita`, form),
      figli, figliNum, tenore: $(`#${prefix}-tenore`).value,
    };
    if (moduleKey === 'divorzile') {
      base.contributo = $('#d-contributo').value;
      base.rinunce = $('#d-rinunce').value;
    }

    const r = calcFn(base);
    lastResult[moduleKey] = r;
    renderConiugeOrDivorzile($('#result-' + moduleKey), r, moduleKey);
  });

  form.addEventListener('reset', () => {
    setTimeout(() => {
      $$('.field.invalid', form).forEach((f) => f.classList.remove('invalid'));
      $$('[data-err]', form).forEach((e) => (e.textContent = ''));
      numWrap.hidden = true;
      $('#result-' + moduleKey).innerHTML = emptyState(moduleKey);
      lastResult[moduleKey] = null;
    }, 0);
  });
}

function buildFigliInputs(n) {
  const container = $('#f-figliContainer');
  const existing = {};
  $$('.figlio-card', container).forEach((card) => {
    const i = card.dataset.idx;
    existing[i] = {
      eta: $(`#f-eta-${i}`)?.value || '',
      esig: card.querySelector(`input[name="f-esig-${i}"]:checked`)?.value || 'medie',
      scol: $(`#f-scol-${i}`)?.value || '',
      san: $(`#f-san-${i}`)?.value || '',
      sport: $(`#f-sport-${i}`)?.value || '',
    };
  });
  let html = '';
  for (let i = 1; i <= n; i++) {
    const e = existing[i] || {};
    html += `
    <div class="figlio-card" data-idx="${i}">
      <div class="figlio-card-head">Figlio ${i}</div>
      <div class="figlio-grid">
        <div class="field">
          <label for="f-eta-${i}">Età (anni) <span class="req">*</span></label>
          <input type="number" id="f-eta-${i}" min="0" max="30" step="1" inputmode="numeric" value="${e.eta || ''}" required />
          <span class="field-err" data-err></span>
        </div>
        <div class="field">
          <label for="f-scol-${i}">Spese scolastiche (€/mese)</label>
          <input type="number" id="f-scol-${i}" min="0" step="10" inputmode="decimal" value="${e.scol || ''}" />
        </div>
        <div class="field">
          <label for="f-san-${i}">Spese sanitarie (€/mese)</label>
          <input type="number" id="f-san-${i}" min="0" step="10" inputmode="decimal" value="${e.san || ''}" />
        </div>
        <div class="field">
          <label for="f-sport-${i}">Spese sportive/extra (€/mese)</label>
          <input type="number" id="f-sport-${i}" min="0" step="10" inputmode="decimal" value="${e.sport || ''}" />
        </div>
      </div>
      <div class="field" style="margin-top:14px">
        <span class="field-label">Esigenze ordinarie</span>
        <div class="radio-group" role="radiogroup" aria-label="Esigenze ordinarie figlio ${i}">
          <label class="radio-pill"><input type="radio" name="f-esig-${i}" value="basse" ${e.esig === 'basse' ? 'checked' : ''}/><span>Basse</span></label>
          <label class="radio-pill"><input type="radio" name="f-esig-${i}" value="medie" ${!e.esig || e.esig === 'medie' ? 'checked' : ''}/><span>Medie</span></label>
          <label class="radio-pill"><input type="radio" name="f-esig-${i}" value="alte" ${e.esig === 'alte' ? 'checked' : ''}/><span>Alte</span></label>
        </div>
      </div>
    </div>`;
  }
  container.innerHTML = html;
}

function bindFigli() {
  const form = $('#form-figli');
  const numSel = $('#f-numFigli');
  buildFigliInputs(Number(numSel.value));
  numSel.addEventListener('change', () => buildFigliInputs(Number(numSel.value)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const n = Number(numSel.value);
    let valid = true;
    const figli = [];
    for (let i = 1; i <= n; i++) {
      const eta = validateNumber($(`#f-eta-${i}`), { required: true, min: 0, max: 30 });
      const scol = validateNumber($(`#f-scol-${i}`), {});
      const san = validateNumber($(`#f-san-${i}`), {});
      const sport = validateNumber($(`#f-sport-${i}`), {});
      if ([eta, scol, san, sport].some((v) => v === null)) { valid = false; continue; }
      figli.push({ eta, scol, san, sport, esigenze: form.querySelector(`input[name="f-esig-${i}"]:checked`).value });
    }
    const reddA = validateNumber($('#f-reddA'), { required: true });
    const reddB = validateNumber($('#f-reddB'), { required: true });
    const tempoA = validateNumber($('#f-tempoA'), { required: true, min: 0, max: 100 });
    const abitazione = validateNumber($('#f-abitazione'), {});
    if ([reddA, reddB, tempoA, abitazione].some((v) => v === null)) valid = false;
    if (!valid) return;

    const r = calcFigli({
      figli, reddA, reddB, tempoA, abitazione,
      obbligato: readRadio('f-obbligato', form),
    });
    lastResult.figli = r;
    renderFigli($('#result-figli'), r);
  });

  form.addEventListener('reset', () => {
    setTimeout(() => {
      buildFigliInputs(Number(numSel.value));
      $$('.field.invalid', form).forEach((f) => f.classList.remove('invalid'));
      $('#result-figli').innerHTML = emptyState('figli');
      lastResult.figli = null;
    }, 0);
  });
}

function emptyState(key) {
  if (key === 'figli') {
    return `<div class="result-empty">
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16" cy="14" r="5"/><circle cx="32" cy="14" r="5"/><path d="M8 34c0-5 3.6-8 8-8s8 3 8 8M24 34c0-5 3.6-8 8-8s8 3 8 8"/></svg>
      <p>Compila il modulo e premi <strong>Calcola assegno</strong> per ottenere il dettaglio del fabbisogno e il contributo orientativo.</p></div>`;
  }
  const txt = key === 'divorzile'
    ? 'per ottenere l\'importo orientativo e la motivazione fondata sulle Sezioni Unite.'
    : 'per ottenere l\'importo orientativo e la motivazione dei criteri considerati.';
  return `<div class="result-empty">
    <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M24 8v32M14 38h20M24 8l-9 5M24 8l9 5"/><circle cx="15" cy="13" r="4.5"/><circle cx="33" cy="13" r="4.5"/></svg>
    <p>Compila il modulo e premi <strong>Calcola assegno</strong> ${txt}</p></div>`;
}

/* ============ PDF EXPORT ============ */
const PDF = {
  navy: [21, 35, 61],
  navyDark: [15, 26, 46],
  gold: [169, 134, 59],
  ink: [40, 46, 60],
  inkSoft: [90, 99, 116],
  line: [210, 210, 210],
  cream: [251, 248, 241],
};

function pdfHeader(doc, subtitle) {
  doc.setFillColor(...PDF.navyDark);
  doc.rect(0, 0, 210, 30, 'F');
  doc.setFillColor(...PDF.gold);
  doc.rect(0, 30, 210, 1.2, 'F');

  // logo mark (scales of justice, simple)
  doc.setDrawColor(...PDF.gold); doc.setLineWidth(0.5);
  doc.line(20, 9, 20, 22); doc.line(14, 22, 26, 22);
  doc.line(20, 9, 15.5, 12); doc.line(20, 9, 24.5, 12);
  doc.circle(15.5, 13.5, 2.2); doc.circle(24.5, 13.5, 2.2);

  doc.setTextColor(250, 246, 236);
  doc.setFont('times', 'bold'); doc.setFontSize(18);
  doc.text('CalcoloAssegni', 32, 14);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
  doc.setTextColor(212, 184, 118);
  doc.text('Report di calcolo orientativo', 32, 20);
  doc.setTextColor(220, 224, 232); doc.setFontSize(8);
  doc.text(subtitle, 32, 25);
}

function pdfFooter(doc) {
  const h = doc.internal.pageSize.getHeight();
  doc.setDrawColor(...PDF.line); doc.setLineWidth(0.3);
  doc.line(20, h - 16, 190, h - 16);
  doc.setFont('helvetica', 'italic'); doc.setFontSize(7.5);
  doc.setTextColor(...PDF.inkSoft);
  doc.text('Generato con CalcoloAssegni — Avv. Carlo Alberto Calcagno, Foro di Genova', 20, h - 11);
  const pageNo = doc.internal.getCurrentPageInfo().pageNumber;
  const pageTot = doc.internal.getNumberOfPages();
  doc.text(`Pagina ${pageNo} di ${pageTot}`, 190, h - 11, { align: 'right' });
}

function nowStr() {
  return new Date().toLocaleString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function exportPdf(key) {
  const r = lastResult[key];
  if (!r) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  pdfHeader(doc, r.type);
  let y = 42;

  // Metadata
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...PDF.inkSoft);
  doc.text(`Tipo di calcolo: ${r.type}`, 20, y);
  doc.text(`Data e ora di generazione: ${nowStr()}`, 20, y + 5);
  y += 14;

  // Section: Dati inseriti
  const inputRows = buildInputRows(key, r);
  doc.autoTable({
    startY: y,
    head: [['Dati inseriti', 'Valore']],
    body: inputRows,
    theme: 'grid',
    headStyles: { fillColor: PDF.navy, textColor: [250, 246, 236], fontStyle: 'bold', fontSize: 9 },
    bodyStyles: { fontSize: 8.5, textColor: PDF.ink },
    alternateRowStyles: { fillColor: [248, 245, 238] },
    columnStyles: { 0: { cellWidth: 110 }, 1: { cellWidth: 60, halign: 'right' } },
    margin: { left: 20, right: 20 },
  });
  y = doc.lastAutoTable.finalY + 10;

  // Detail table for figli
  if (key === 'figli') {
    const body = r.detail.map((f) => [
      `Figlio ${f.n} (${f.fascia})`, fmtEur(f.baseAgg), fmtEur(f.spese), fmtEur(f.tot),
    ]);
    body.push(['Quota abitazione collocatario (30%)', '—', '—', fmtEur(r.quotaAbitazione)]);
    body.push([{ content: 'Fabbisogno mensile totale', styles: { fontStyle: 'bold' } }, '', '', { content: fmtEur(r.fabbisognoTotale), styles: { fontStyle: 'bold' } }]);
    doc.autoTable({
      startY: y,
      head: [['Dettaglio fabbisogno', 'Base', 'Spese', 'Totale']],
      body,
      theme: 'grid',
      headStyles: { fillColor: PDF.navy, textColor: [250, 246, 236], fontStyle: 'bold', fontSize: 9 },
      bodyStyles: { fontSize: 8.5, textColor: PDF.ink },
      columnStyles: { 0: { cellWidth: 86 }, 1: { halign: 'right' }, 2: { halign: 'right' }, 3: { halign: 'right' } },
      margin: { left: 20, right: 20 },
    });
    y = doc.lastAutoTable.finalY + 10;
  }

  // Result highlight box
  if (y > 230) { doc.addPage(); pdfHeader(doc, r.type); y = 42; }
  doc.setFillColor(...PDF.navyDark);
  doc.roundedRect(20, y, 170, 26, 2, 2, 'F');
  doc.setFillColor(...PDF.gold);
  doc.rect(20, y, 2, 26, 'F');
  doc.setTextColor(212, 184, 118); doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
  doc.text('ASSEGNO MENSILE ORIENTATIVO', 28, y + 8);
  doc.setTextColor(250, 246, 236); doc.setFont('times', 'bold'); doc.setFontSize(22);
  doc.text(fmtEur(r.monthly), 28, y + 19);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(220, 224, 232);
  doc.text(`Annuale: ${fmtEur(r.annual)}`, 120, y + 11);
  doc.text(`Range: ${fmtEur(r.min)} – ${fmtEur(r.max)}`, 120, y + 18);
  y += 36;

  // Criteri considerati
  if (y > 250) { doc.addPage(); pdfHeader(doc, r.type); y = 42; }
  doc.setFont('times', 'bold'); doc.setFontSize(13); doc.setTextColor(...PDF.navy);
  doc.text('Criteri considerati', 20, y);
  doc.setDrawColor(...PDF.gold); doc.setLineWidth(0.4); doc.line(20, y + 2, 60, y + 2);
  y += 8;
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...PDF.ink);
  const introLines = doc.splitTextToSize(r.motivIntro, 170);
  doc.text(introLines, 20, y);
  y += introLines.length * 4.6 + 4;

  if (r.steps && r.steps.length) {
    r.steps.forEach((s) => {
      if (y > 270) { doc.addPage(); pdfHeader(doc, r.type); y = 42; }
      const sign = s.v > 0 ? '+' : '';
      const val = s.v === 0 ? '—' : `${sign}${(s.v * 100).toFixed(0)}%`;
      doc.setFillColor(...PDF.gold); doc.circle(22, y - 1.2, 0.8, 'F');
      doc.setTextColor(...PDF.inkSoft); doc.setFontSize(8.5);
      const lines = doc.splitTextToSize(s.label, 150);
      doc.text(lines, 25, y);
      doc.setTextColor(...PDF.gold); doc.setFont('helvetica', 'bold');
      doc.text(val, 190, y, { align: 'right' });
      doc.setFont('helvetica', 'normal');
      y += lines.length * 4.4 + 1.5;
    });
  }
  y += 6;

  // Disclaimer
  if (y > 255) { doc.addPage(); pdfHeader(doc, r.type); y = 42; }
  doc.setFillColor(251, 241, 216); doc.setDrawColor(216, 190, 126); doc.setLineWidth(0.4);
  const discLines = doc.splitTextToSize(DISCLAIMER, 162);
  const boxH = discLines.length * 4.2 + 10;
  doc.roundedRect(20, y, 170, boxH, 2, 2, 'FD');
  doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(110, 86, 28);
  doc.text('AVVERTENZA LEGALE', 25, y + 6);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.2);
  doc.text(discLines, 25, y + 11);

  // Footers on all pages
  const pages = doc.internal.getNumberOfPages();
  for (let p = 1; p <= pages; p++) { doc.setPage(p); pdfFooter(doc); }

  const fname = `CalcoloAssegni_${key}_${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(fname);
}

function buildInputRows(key, r) {
  const d = r.data;
  if (key === 'figli') {
    const rows = [
      ['Numero di figli', String(d.figli.length)],
      ['Reddito netto mensile genitore A', fmtEur(d.reddA)],
      ['Reddito netto mensile genitore B', fmtEur(d.reddB)],
      ['Tempo di permanenza presso il genitore A', d.tempoA + '%'],
      ['Costo abitazione collocatario', fmtEur(d.abitazione)],
      ['Genitore obbligato al versamento', r.obbLabel],
    ];
    d.figli.forEach((f, i) => {
      rows.push([`Figlio ${i + 1} — età / esigenze`, `${f.eta} anni · ${ESIG_LABEL[f.esigenze]}`]);
      const spese = f.scol + f.san + f.sport;
      rows.push([`Figlio ${i + 1} — spese specifiche (scol./san./sport.)`, fmtEur(spese)]);
    });
    return rows;
  }
  const rows = [
    ['Reddito netto mensile coniuge obbligato', fmtEur(d.reddObb)],
    ['Reddito netto mensile coniuge richiedente', fmtEur(d.reddRic)],
    ['Patrimonio coniuge obbligato', fmtEur(d.patrObb)],
    ['Patrimonio coniuge richiedente', fmtEur(d.patrRic)],
    ['Durata del matrimonio', d.durata + ' anni'],
    ['Età del coniuge richiedente', d.eta + ' anni'],
    ['Capacità lavorativa del richiedente', CAP_LABEL[d.capacita]],
    ['Figli a carico', d.figli ? `Sì (${d.figliNum})` : 'No'],
    ['Tenore di vita matrimoniale', TENORE_LABEL[d.tenore]],
  ];
  if (key === 'divorzile') {
    rows.push(['Contributo alla vita familiare', CONTRIB_LABEL[d.contributo]]);
    rows.push(['Rinunce/sacrifici professionali', RINUNCE_LABEL[d.rinunce]]);
  }
  return rows;
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  $('#footer-year').textContent = new Date().getFullYear();
  initTheme();
  initNav();
  bindConiugeLike('c', 'form-coniuge', calcConiuge, 'coniuge');
  bindConiugeLike('d', 'form-divorzile', calcDivorzile, 'divorzile');
  bindFigli();
});
