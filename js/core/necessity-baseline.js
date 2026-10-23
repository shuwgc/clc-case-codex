import { FSQCA_SCORES } from '../../data/fsqca-scores.js';
import { necessaryConditions } from './qca-engine.js';

export const BASELINE_CONDITIONS = ['RES', 'TEC', 'ACT', 'CAP', 'SPA', 'IND'];
export const BASELINE_OUTCOMES = ['AGR', 'CON', 'ECO', 'SPE'];
// Full precision substantive anchors; matches the archived matrix's log(19) calibration.
export const substantiveCalibration = value => 1 / (1 + Math.exp(-Math.log(19) * (value - 0.5) / 0.25));
export function baselineNecessity(outcome, negated = false) {
  const rows = FSQCA_SCORES.cases.map(c => {
    const values = Object.fromEntries(c.variables.filter(v => v.side !== 'context').map(v => [v.code, v.calibrated === '' || v.calibrated == null ? NaN : Number(v.calibrated)]));
    const y = substantiveCalibration(values[outcome]);
    return { caseId: c.id, x: Object.fromEntries(BASELINE_CONDITIONS.map(code => [code, substantiveCalibration(values[code])])), y: negated ? 1-y : y };
  });
  return necessaryConditions({ conditions: BASELINE_CONDITIONS, outcome, rows });
}
