"""Build the indexed Chapter XVIII study PDF from the course's shared data."""
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
rows=json.loads((DATA/'documentOffences.json').read_text())
study=json.loads((DATA/'documentStudy.json').read_text())
OUT=ROOT/'public/documents/criminal-law-i/chapter-18-documents-property-marks-ipc-bns.pdf'
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
 c.setFont('StudySans',8);c.setFillColor(colors.HexColor('#53647d'));c.drawString(42,29,'Sanhita360 | Criminal Law I | IPC XVIII / BNS XVIII and X');c.drawRightString(A4[0]-42,29,str(doc.page));c.restoreState()
story=[Spacer(1,32),p('SANHITA360','Map'),p('Criminal Law I\nTransitioning from IPC to BNS','SectionTitle'),Spacer(1,20),p('CHAPTER XVIII\nDOCUMENTS AND\nPROPERTY MARKS','CoverTitle'),p('IPC 463-489E | BNS 335-350 and 178-182','Map'),p(study['overview']),Spacer(1,12),p('33 entries (2 repealed) | 4 topic groups | 8 practice problems'),p('Study edition: 5 October 2026. Based on the official BNS Gazette text and commencement notification. Penalty notes concern the cited central BNS text; they are summaries, not verbatim provisions. Read the full applicable enactment for a case.'),p('The IPC chapter numeral XVIII is retained. This lesson occupies course position 20 because the course separately includes introductory and lettered IPC chapters.'),PageBreak(),heading('Contents','contents')]
for i,g in enumerate(study['groups']):story.append(Paragraph(f'<link href="#group-{i}" color="#1d4ed8">{escape(g["title"])} - IPC {g["start"]}-{g["end"]}</link>',styles['Index']))
for title,key in [('Objectives and transition','overview'),('Revision and exam method','revision'),('Practice questions and model answers','practice'),('Official sources','sources')]:story.append(Paragraph(f'<link href="#{key}" color="#1d4ed8">{escape(title)}</link>',styles['Index']))
story += [Spacer(1,12),p('Click a contents link to jump to a topic. PDF bookmarks also provide direct access to all 33 IPC entries, including the two repealed provisions.','SmallCopy'),PageBreak(),heading('Objectives and transition','overview')]
for x in study['objectives']:story.append(p('- '+x))
story += [Spacer(1,12),p(study['transition']),p('How to read the crosswalk','ProvisionTitle'),p('References indicate the closest corresponding subject matter, not necessarily identical scope. IPC 478 and 480 were repealed before BNS. Currency offences are relocated to BNS Chapter X. The other topics are consolidated within Chapter XVIII.')]
for i,g in enumerate(study['groups']):
 story += [PageBreak(),heading(g['title'],f'group-{i}'),p(f'IPC {g["start"]}-{g["end"]}','Map'),p(g['explanation'])]
 for r in rows:
  if r['ipc'] in g['sections']:
   story += [heading(f'IPC {r["ipc"]}. {r["title"]}',f'ipc-{r["ipc"]}',1),p('BNS reference: '+r['bns'],'Map'),p(r['note'])]

story += [PageBreak(),heading('Revision and exam method','revision')]
for x in study['keyPoints']:story.append(p('- '+x))
story += [p(study['examFocus']),p('High-yield distinctions','ProvisionTitle')]
for x in ['False assertion / false document / forgery: prove each statutory requirement.', 'Making / possessing / using: conduct and mental elements differ.', 'Property ownership / commercial origin / receptacle contents: classify the mark.', 'Counterfeiting / knowing currency possession / resemblance documents: separate the provisions.']:
 story.append(p('- '+x))
story += [PageBreak(),heading('Practice questions and model answers','practice'),p('Self-check exercises. These are study questions, not a timed or graded assessment.')]
for i,q in enumerate(study['practice']):story += [p(f'{i+1}. {q["question"]}','ProvisionTitle'),p('Model answer: '+q['answer'])]
story += [PageBreak(),heading('Official sources','sources'),p('Primary reading and source scope','ProvisionTitle')]
for s in study['sources']:
 story += [p(s['title']),Paragraph(f'<link href="{escape(s["url"])}" color="#1d4ed8">Open official source</link>',styles['Copy'])]
story += [p('BNS Chapter XVIII appears on Gazette printed pages 92-97; the currency provisions appear on printed pages 52-53 in Chapter X. The commencement notification fixes 1 July 2024 for these provisions. The IPC link is historical reading; use the relevant version for the date and jurisdiction. The supplied IPC headings have been normalised for spelling and grouping.'),p('These explanatory notes were prepared for legal education. A section mapping does not establish liability without proof of the statutory ingredients. Subsequent amendments, special statutes and applicable local provisions must be checked for a live matter.')]
Doc(str(OUT),pagesize=A4,rightMargin=45,leftMargin=45,topMargin=44,bottomMargin=57,title=study['title'],author='Sanhita360',pageCompression=1).build(story,onFirstPage=footer,onLaterPages=footer)
print(OUT)
