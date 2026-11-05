from pathlib import Path
from math import sin,cos,pi
p=Path(__file__).parent/'public';(p/'plants').mkdir(exist_ok=True)
ids=['monstera','snake','pothos','peace','rubber','fern','lavender','rosemary','mint','basil','jasmine','thyme','aloe','jade','echeveria','haworthia','cactus','zz']
for i,name in enumerate(ids):
 parts=['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 280">',f'<rect width="360" height="280" fill="{["#edf0e5","#e9eee5","#f0ede3"][i%3]}"/>','<ellipse cx="180" cy="253" rx="65" ry="10" fill="#253b2415"/>']
 if name=='cactus':
  parts+=['<rect x="137" y="77" width="86" height="128" rx="42" fill="#63854b"/>']
  for x in range(148,221,12):parts.append(f'<path d="M{x} 92v105" stroke="#c8d388" stroke-width="2"/>')
  for x in range(145,224,15):
   for y in range(100,195,18):parts.append(f'<path d="M{x-3} {y-3}l6 6m0-6l-6 6" stroke="#edda95" stroke-width="1"/>')
 elif name in ['snake','aloe','haworthia']:
  for j in range(9):
   a=(j-4)*.15; tipx=180+(j-4)*13; tipy=48+abs(j-4)*16
   parts.append(f'<path d="M180 212Q{tipx-15} 120 {tipx} {tipy}Q{tipx+25} 144 180 212" fill="{["#486c39","#72904e","#254f38"][j%3]}" stroke="#a3ba6b" stroke-width="2"/>')
   if name=='haworthia':
    for y in range(100,185,14):parts.append(f'<path d="M{180+(tipx-180)*.6-4} {y}l8 3" stroke="#d4dfb2" stroke-width="2"/>')
 elif name=='echeveria':
  for ring in [1,.68,.4]:
   for j in range(10):
    ang=j*36
    parts.append(f'<ellipse cx="180" cy="{160-40*ring}" rx="{19*ring}" ry="{49*ring}" transform="rotate({ang} 180 160)" fill="{["#719f86","#9bb59b","#527b6b"][j%3]}" stroke="#b8c9a5" stroke-width="2"/>')
 else:
  for j in range(5 if name not in ['fern','rosemary','thyme'] else 9):
   tx=115+j*(130/(4 if name not in ['fern','rosemary','thyme'] else 8));ty=70+abs(tx-180)*.45
   parts.append(f'<path d="M180 213Q{180+(tx-180)*.5} 130 {tx} {ty}" fill="none" stroke="#42673b" stroke-width="3"/>')
   if name in ['fern','rosemary','thyme']:
    for k in range(7):
     y=ty+k*16;x=tx+(180-tx)*(k/10)
     for side in [-1,1]:parts.append(f'<ellipse cx="{x+side*10}" cy="{y}" rx="{14 if name=="fern" else 8}" ry="{5 if name!="thyme" else 4}" transform="rotate({side*35} {x+side*10} {y})" fill="#61834b"/>')
   else:
    size=24 if name in ['monstera','rubber','peace'] else 15
    for k in range(3):
     y=ty+25+k*31;x=tx+(180-tx)*(k/5)
     side=-1 if k%2 else 1
     parts.append(f'<ellipse cx="{x+side*size*.6}" cy="{y}" rx="{size}" ry="{size*.55}" transform="rotate({side*43} {x} {y})" fill="{["#3b6847","#68874b","#234f3a"][j%3]}"/>')
    if name in ['lavender','jasmine','peace']:
     color='#9a86b2' if name=='lavender' else '#fffef1'
     parts.append(f'<ellipse cx="{tx}" cy="{ty}" rx="{7 if name=="lavender" else 12}" ry="{20 if name!="jasmine" else 9}" fill="{color}"/>')
 pot=['#c9a17b','#b6a98f','#d6cbb0'][i%3]
 parts.extend([f'<path d="M133 205h94l-12 45q-35 10-70 0z" fill="{pot}"/>','<ellipse cx="180" cy="205" rx="49" ry="9" fill="#aa8b6b"/>','<ellipse cx="180" cy="204" rx="41" ry="5" fill="#4c3e2e"/>',f'<path d="M132 206h96v9h-96z" fill="{pot}"/>','</svg>'])
 (p/'plants'/f'{name}.svg').write_text(''.join(parts))
# Original greenhouse illustration, with architectural ribs and layered foliage.
s=['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#698779"/><stop offset="1" stop-color="#1d4335"/></linearGradient><linearGradient id="leaf"><stop stop-color="#426e43"/><stop offset="1" stop-color="#173f2c"/></linearGradient></defs><rect width="1600" height="1000" fill="url(#sky)"/>']
for x in range(-200,1800,200):s.append(f'<path d="M{x} 1000V260L800 -80" fill="none" stroke="#d0d3b5" stroke-width="12" opacity=".35"/>')
for y in [260,450,650,850]:s.append(f'<path d="M0 {y}H1600" stroke="#bfc9ac" stroke-width="9" opacity=".25"/>')
for i in range(32):
 x=(i*167)%1700-50;y=400+(i*73)%550;ang=(i*71)%140-70
 s.append(f'<path d="M{x} 1050Q{x+50} {y} {x-45} {y-200}" stroke="#355939" stroke-width="8" fill="none"/>')
 for j in range(4):s.append(f'<ellipse cx="{x+(j%2*2-1)*60}" cy="{y+j*90}" rx="100" ry="37" transform="rotate({ang+j*10} {x} {y+j*90})" fill="url(#leaf)"/>')
s.append('</svg>');(p/'greenhouse.svg').write_text(''.join(s))
