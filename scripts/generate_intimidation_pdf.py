"""Build the indexed Chapter XXII study PDF from the course's shared data."""
from pathlib import Path
import json
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
pdfmetrics.registerFont(TTFont("StudySans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("StudySans-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

ROOT=Path(__file__).resolve().parents[1]
DATA=ROOT/'src/data/courses/criminalLawI'
rows=json.loads((DATA/'intimidationOffences.json').read_text())
study=json.loads((DATA/'intimidationStudy.json').read_text())
OUT=ROOT/'public/documents/criminal-law-i/chapter-22-intimidation-insult-annoyance-ipc-bns.pdf'
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='CoverTitle',fontName='StudySans-Bold',fontSize=27,leading=33,textColor=colors.HexColor('#13345b'),spaceAfter=22))
styles.add(ParagraphStyle(name='SectionTitle',fontName='StudySans-Bold',fontSize=19,leading=24,textColor=colors.HexColor('#13345b'),spaceAfter=14,keepWithNext=True))
styles.add(ParagraphStyle(name='ProvisionTitle',fontName='StudySans-Bold',fontSize=11,leading=15,textColor=colors.HexColor('#13345b'),spaceBefore=13,spaceAfter=5,keepWithNext=True))
styles.add(ParagraphStyle(name='Copy',fontName='StudySans',fontSize=10.2,leading=15,spaceAfter=9))
styles.add(ParagraphStyle(name='Map',fontName='StudySans-Bold',fontSize=10,leading=14,textColor=colors.HexColor('#166060'),spaceAfter=5,keepWithNext=True))
styles.add(ParagraphStyle(name='SmallCopy',fontName='StudySans',fontSize=8.8,leading=13,spaceAfter=8))
styles.add(ParagraphStyle(name='Index',fontName='StudySans',fontSize=12,leading=23,spaceAfter=5))
class Doc(SimpleDocTemplate):
 def afterFlowable(self,f):
  if getattr(f,'bookmark',None):
   key,title,level=f.bookmark
   self.canv.bookmarkPage(key)
   self.canv.addOutlineEntry(title,key,level,False)

def p(text,style='Copy'):return Paragraph(escape(text).replace('\n','<br/>'),styles[style])
def heading(title,key,level=0):
 f=Paragraph(f'<a name="{key}"/>'+escape(title),styles['SectionTitle' if level==0 else 'ProvisionTitle']);f.bookmark=(key,title,level);return f

def footer(c,doc):
 c.saveState();c.setStrokeColor(colors.HexColor('#d3dee9'));c.line(42,42,A4[0]-42,42)
 c.setFont('StudySans',8);c.setFillColor(colors.HexColor('#53647d'));c.drawString(42,29,'Sanhita360 | Criminal Law I | IPC XXII / BNS 351-355, 79');c.drawRightString(A4[0]-42,29,str(doc.page));c.restoreState()
story=[p('SANHITA360','Map'),p('Criminal Law I | Transitioning from IPC to BNS','SectionTitle'),Spacer(1,16),p('CHAPTER XXII\nOF CRIMINAL INTIMIDATION,\nINSULT AND ANNOYANCE','CoverTitle'),p('IPC 503-510 | BNS 351-355 and 79','Map'),p(study['overview']),p('Study edition: 6 October 2026. Course position 25. Eight central IPC provisions, two historical state insertions and eight self-check questions. Notes summarise the cited central enactments for legal education.'),Spacer(1,14),heading('Contents','contents')]
for title,key in [('Objectives and transition','overview'),('IPC-to-BNS comparison','comparison'),('Ingredients, distinctions and illustrations','ingredients'),('Chhattisgarh state amendments','exceptions'),('Revision and exam method','revision'),('Practice questions and model answers','practice'),('Official sources','sources')]:
 story.append(Paragraph(f'<link href="#{key}" color="#1d4ed8">{escape(title)}</link>',styles['Index']))
story += [PageBreak(),heading('Objectives and transition','overview')]
for x in study['objectives']:story.append(p('- '+x))
story += [Spacer(1,12),p(study['transition']),PageBreak(),heading('IPC-to-BNS comparison','comparison'),p(study['groups'][0]['explanation'])]
for r in rows:story += [heading(f'IPC {r["ipc"]}. {r["title"]}',f'ipc-{r["ipc"]}',1),p('BNS reference: '+r['bns'],'Map'),p(r['note'])]
story += [PageBreak(),heading('Ingredients, distinctions and illustrations','ingredients'),p(study['groups'][1]['explanation']),PageBreak(),heading('Chhattisgarh state amendments','exceptions')]
for i, item in enumerate(study['groups'][2]['explanation'].split('\n\n')):
 story += [p(item)]
story += [PageBreak(),heading('Revision and exam method','revision')]
for x in study['keyPoints']:story.append(p('- '+x))
story += [p(study['examFocus']),PageBreak(),heading('Practice questions and model answers','practice'),p('Self-check study exercises; not a timed or graded assessment.')]
for i,q in enumerate(study['practice']):story += [p(f'{i+1}. {q["question"]}','ProvisionTitle'),p('Model answer: '+q['answer'])]
story += [PageBreak(),heading('Official sources','sources')]
for source in study['sources']:
 story += [p(source['title']),Paragraph(f'<link href="{escape(source["url"])}" color="#1d4ed8">Open official source</link>',styles['Copy'])]
story += [p('Read the full applicable statutory text for a live matter. The historical Chhattisgarh insertions are not asserted to be current BNS amendments. The examples are teaching illustrations, not reported judgments.')]
Doc(str(OUT),pagesize=A4,rightMargin=45,leftMargin=45,topMargin=44,bottomMargin=57,title=study['title'],author='Sanhita360',pageCompression=1).build(story,onFirstPage=footer,onLaterPages=footer)
print(OUT)
