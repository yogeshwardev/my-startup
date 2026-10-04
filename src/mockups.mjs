// Illustrative product mock-ups drawn as inline SVG. They are abstract interface sketches,
// not screenshots of real client products, and are labelled as demo/concept work on the site.

const r = (x, y, w, h, fill = 'var(--soft)', rx = 6, stroke = 'none') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}"${stroke !== 'none' ? ' stroke-width="1"' : ''}/>`;
const line = (x, y, w, o = 0.14, h = 7) => r(x, y, w, h, `var(--ink)`, 3.5).replace('/>', ` opacity="${o}"/>`);
const dot = (x, y, rad, fill) => `<circle cx="${x}" cy="${y}" r="${rad}" fill="${fill}"/>`;

const frame = (inner, label, { side = true } = {}) => `<svg class="mock" viewBox="0 0 700 400" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">
${r(1, 1, 698, 398, 'var(--surface)', 14, 'var(--line)')}
${r(1, 1, 698, 40, 'var(--soft)', 14)}
<rect x="1" y="27" width="698" height="14" fill="var(--soft)"/>
${dot(22, 21, 4.5, 'var(--line-strong)')}${dot(38, 21, 4.5, 'var(--line-strong)')}${dot(54, 21, 4.5, 'var(--line-strong)')}
${r(230, 12, 240, 18, 'var(--surface)', 9, 'var(--line)')}
${side ? `<rect x="1" y="41" width="132" height="358" fill="var(--soft)" opacity=".6"/>${r(16, 58, 24, 24, 'var(--accent)', 7)}${line(48, 66, 60, 0.5)}${[104, 130, 156, 182, 208].map((y, i) => r(14, y, 104, 18, i === 0 ? 'var(--accent-soft)' : 'transparent', 6) + line(24, y + 5.5, 50 + (i % 3) * 14, i === 0 ? 0.5 : 0.16)).join('')}` : ''}
${inner}
</svg>`;

const X = 156; // content origin when sidebar is shown

const mocks = {
  clinic: () => {
    let cal = '';
    const days = 5, rows = 5, cw = 62, ch = 44;
    const booked = new Set(['0-1', '1-0', '1-3', '2-2', '3-1', '3-4', '4-0', '4-2']);
    for (let c = 0; c < days; c++) {
      cal += line(X + 14 + c * cw, 112, 30, 0.3);
      for (let rr = 0; rr < rows; rr++) {
        const on = booked.has(`${c}-${rr}`);
        cal += r(X + 10 + c * cw, 130 + rr * 50, cw - 8, ch, on ? 'var(--accent-soft)' : 'var(--soft)', 8, on ? 'var(--accent)' : 'none');
        if (on) cal += line(X + 18 + c * cw, 144 + rr * 50, 28, 0.55) + line(X + 18 + c * cw, 158 + rr * 50, 18, 0.2);
      }
    }
    let list = '';
    for (let i = 0; i < 5; i++) list += `${dot(X + 345, 156 + i * 46, 12, i === 0 ? 'var(--accent)' : 'var(--line-strong)')}${line(X + 366, 148 + i * 46, 84, 0.45)}${line(X + 366, 162 + i * 46, 58, 0.16)}${r(X + 456, 146 + i * 46, 48, 20, i < 2 ? 'var(--accent-soft)' : 'var(--soft)', 10)}`;
    return frame(`${line(X, 64, 120, 0.7, 10)}${line(X, 84, 180, 0.16)}${r(X + 400, 58, 96, 28, 'var(--accent)', 8)}${cal}${r(X + 330, 108, 180, 270, 'var(--surface)', 12, 'var(--line)')}${line(X + 346, 122, 90, 0.45)}${list}`, 'Illustration of an appointment calendar and daily schedule');
  },
  school: () => {
    const stats = [0, 1, 2].map((i) => r(X + i * 166, 100, 154, 70, 'var(--surface)', 10, 'var(--line)') + line(X + 14 + i * 166, 116, 60, 0.18) + line(X + 14 + i * 166, 136, 80 - i * 10, 0.7, 14)).join('');
    const bars = [60, 90, 70, 120, 100, 140, 110, 96].map((h, i) => r(X + 22 + i * 28, 358 - h, 18, h, i === 5 ? 'var(--accent)' : 'var(--accent-soft)', 4)).join('');
    let rows = '';
    for (let i = 0; i < 6; i++) rows += `${dot(X + 270, 230 + i * 24, 7, 'var(--line-strong)')}${line(X + 286, 226 + i * 24, 80, 0.4)}${line(X + 390, 226 + i * 24, 40, 0.14)}${r(X + 446, 222 + i * 24, 48, 16, i % 3 === 0 ? 'var(--soft)' : 'var(--accent-soft)', 8)}`;
    return frame(`${line(X, 64, 140, 0.7, 10)}${line(X, 84, 100, 0.16)}${stats}${r(X, 190, 250, 190, 'var(--surface)', 12, 'var(--line)')}${line(X + 16, 204, 70, 0.4)}${bars}${r(X + 256, 190, 252, 190, 'var(--surface)', 12, 'var(--line)')}${line(X + 272, 204, 90, 0.4)}${rows}`, 'Illustration of a school dashboard with attendance, fees and a student list');
  },
  property: () => {
    const chipsRow = [0, 1, 2, 3].map((i) => r(X + i * 76, 96, 66, 24, i === 0 ? 'var(--accent)' : 'var(--soft)', 12)).join('');
    const card = (x, y, hue) => `${r(x, y, 160, 150, 'var(--surface)', 12, 'var(--line)')}${r(x + 8, y + 8, 144, 78, hue, 8)}<path d="M${x + 36} ${y + 72} l28 -34 l22 24 l16 -14 l30 24z" fill="var(--surface)" opacity=".7"/>${line(x + 12, y + 98, 90, 0.5)}${line(x + 12, y + 114, 60, 0.18)}${r(x + 12, y + 128, 52, 12, 'var(--accent-soft)', 6)}`;
    return frame(`${line(X, 64, 150, 0.7, 10)}${chipsRow}${card(X, 140, 'var(--accent-soft)')}${card(X + 172, 140, 'var(--soft)')}${card(X + 344, 140, 'var(--accent-soft)')}${r(X, 304, 504, 74, 'var(--surface)', 12, 'var(--line)')}${line(X + 16, 320, 100, 0.4)}${r(X + 16, 340, 110, 26, 'var(--soft)', 8)}${r(X + 136, 340, 110, 26, 'var(--soft)', 8)}${r(X + 380, 336, 108, 30, 'var(--accent)', 9)}`, 'Illustration of a property catalogue with enquiry panel');
  },
  pipeline: () => {
    const cols = ['New', 'Contacted', 'Quoted', 'Won'];
    const out = cols.map((_, i) => {
      const x = X + i * 128;
      let s = `${r(x, 100, 118, 280, 'var(--soft)', 10)}${line(x + 12, 114, 50, 0.45)}`;
      const n = [3, 3, 2, 1][i];
      for (let k = 0; k < n; k++) s += `${r(x + 8, 138 + k * 78, 102, 68, 'var(--surface)', 8, k === 0 && i === 0 ? 'var(--accent)' : 'var(--line)')}${line(x + 18, 152 + k * 78, 62, 0.5)}${line(x + 18, 168 + k * 78, 76, 0.16)}${dot(x + 24, 190 + k * 78, 8, 'var(--line-strong)')}${r(x + 64, 184 + k * 78, 36, 12, i === 3 ? 'var(--accent)' : 'var(--accent-soft)', 6)}`;
      return s;
    }).join('');
    return frame(`${line(X, 64, 120, 0.7, 10)}${line(X, 84, 160, 0.16)}${out}`, 'Illustration of a lead pipeline board');
  },
  hero: () => `<svg class="mock mock--hero" viewBox="0 0 640 500" role="img" aria-label="Illustration of a business dashboard and a mobile app" xmlns="http://www.w3.org/2000/svg">
${r(1, 1, 560, 400, 'var(--surface)', 16, 'var(--line)')}
<path d="M1 17a16 16 0 0 1 16-16h528a16 16 0 0 1 16 16v26H1z" fill="var(--soft)"/>
${dot(24, 22, 4.5, 'var(--line-strong)')}${dot(40, 22, 4.5, 'var(--line-strong)')}${dot(56, 22, 4.5, 'var(--line-strong)')}
${r(190, 12, 220, 20, 'var(--surface)', 10, 'var(--line)')}
<rect x="1" y="43" width="124" height="358" fill="var(--soft)" opacity=".55"/>
${r(16, 60, 26, 26, 'var(--accent)', 8)}${line(50, 69, 54, 0.5)}
${[104, 130, 156, 182].map((y, i) => r(14, y, 98, 18, i === 1 ? 'var(--accent-soft)' : 'transparent', 6) + line(24, y + 5.5, 44 + i * 8, i === 1 ? 0.5 : 0.16)).join('')}
${line(148, 66, 130, 0.7, 11)}${line(148, 88, 190, 0.15)}
${[0, 1, 2].map((i) => r(148 + i * 134, 116, 124, 66, 'var(--surface)', 10, 'var(--line)') + line(160 + i * 134, 130, 50, 0.18) + line(160 + i * 134, 150, 70 - i * 8, 0.7, 13)).join('')}
${r(148, 200, 252, 178, 'var(--surface)', 12, 'var(--line)')}${line(164, 214, 80, 0.4)}
<path d="M168 340 L208 306 L246 322 L290 270 L330 290 L378 238" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M168 340 L208 306 L246 322 L290 270 L330 290 L378 238 V360 H168z" fill="var(--accent)" opacity=".08"/>
${r(408, 200, 140, 178, 'var(--surface)', 12, 'var(--line)')}${line(422, 214, 60, 0.4)}
${[0, 1, 2, 3].map((i) => dot(430, 252 + i * 30, 9, i === 0 ? 'var(--accent)' : 'var(--line-strong)') + line(448, 247 + i * 30, 70, 0.4) + line(448, 259 + i * 30, 44, 0.14, 5)).join('')}
${r(468, 110, 156, 330, '#000', 28, 'var(--line-strong)')}
${r(476, 118, 140, 314, 'var(--surface)', 22)}
${r(526, 124, 40, 8, 'var(--ink)', 4)}
${line(492, 150, 70, 0.7, 10)}${line(492, 168, 100, 0.16)}
${r(488, 192, 120, 64, 'var(--accent)', 12)}${line(500, 206, 50, 0.9, 7).replace('var(--ink)', '#fff')}${line(500, 224, 80, 1, 12).replace('var(--ink)', '#fff')}
${[0, 1, 2].map((i) => r(488, 270 + i * 46, 120, 38, 'var(--soft)', 10) + dot(506, 289 + i * 46, 8, i === 1 ? 'var(--accent)' : 'var(--line-strong)') + line(522, 285 + i * 46, 62, 0.4)).join('')}
${r(488, 410, 120, 14, 'var(--soft)', 7)}
</svg>`
};

export const mock = (kind) => mocks[kind]();
