"""Build the linked Chapter 4 study PDF for the Contract Law course."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public/documents/contract-law/chapter-4-free-consent-and-legality-of-object.pdf"
FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
pdfmetrics.registerFont(TTFont("DejaVu", str(FONT_DIR / "DejaVuSans.ttf")))
pdfmetrics.registerFont(TTFont("DejaVu-Bold", str(FONT_DIR / "DejaVuSans-Bold.ttf")))
pdfmetrics.registerFontFamily("DejaVu", normal="DejaVu", bold="DejaVu-Bold")

NAVY = colors.HexColor("#10243A")
BLUE = colors.HexColor("#145C85")
GOLD = colors.HexColor("#B48A3C")
PALE = colors.HexColor("#EFF5F8")
MUTED = colors.HexColor("#526576")
PAGE_W, PAGE_H = A4
LEFT = 54
RIGHT = PAGE_W - 54
BODY_WIDTH = RIGHT - LEFT

BODY = ParagraphStyle(
    "body", fontName="DejaVu", fontSize=9.4, leading=15.5,
    textColor=NAVY, alignment=TA_LEFT, spaceAfter=0,
)
SMALL = ParagraphStyle(
    "small", parent=BODY, fontSize=8.5, leading=13, textColor=MUTED,
)

SECTIONS = [
    {
        "key": "consent",
        "title": "1. Consent and free consent",
        "subtitle": "Indian Contract Act, 1872 - Sections 10, 13 and 14",
        "blocks": [
            ("First establish consent", [
                "Section 13 says parties consent when they agree on the same thing in the same sense. Identify the subject, terms and each party's understanding. If there is no agreement in that sense, do not skip straight to a claim of defective free consent.",
                "Under Section 10, free consent is one requirement for a contract. Section 14 says consent is free when it is not caused by coercion (Section 15), undue influence (Section 16), fraud (Section 17), misrepresentation (Section 18) or mistake, subject to Sections 20-22. Causation matters: ask whether the alleged factor brought about the consent.",
            ]),
            ("A useful sequence", [
                "Identify the alleged bargain; check whether the parties agreed on the same thing; name the specific vitiating factor; apply its statutory elements; then state the consequence under Sections 19, 19A or 20-22. Do not assume that every defect makes an agreement void from the outset.",
            ]),
        ],
    },
    {
        "key": "coercion",
        "title": "2. Coercion",
        "subtitle": "Section 15 and the Section 19 consequence",
        "blocks": [
            ("The statutory routes", [
                "Section 15 covers committing or threatening an act forbidden by the Indian Penal Code as named in the Act, or unlawfully detaining or threatening to detain property, to the prejudice of any person, with the intention of causing a person to enter an agreement. The statute's reference to the Indian Penal Code should be read with the current governing law and any legislative updates for a real dispute.",
                "The pressure may target a person other than the contracting party. For property, show why the detention or threatened detention was unlawful. Mere hard bargaining or an insistence on a lawful right is not enough by itself.",
            ]),
            ("Apply the consequence", [
                "If coercion caused consent, Section 19 makes the agreement voidable at the option of the party whose consent was so caused. Identify the act or threat, intention to induce the agreement, the causal connection and the party holding the option.",
            ]),
        ],
    },
    {
        "key": "undue",
        "title": "3. Undue influence",
        "subtitle": "Sections 16 and 19A",
        "blocks": [
            ("Dominating the will", [
                "Section 16 concerns a relationship in which one party is in a position to dominate the will of another and uses that position to obtain an unfair advantage. The Act includes real or apparent authority, a fiduciary relation, and certain situations involving impaired capacity through age, illness or mental or bodily distress. A close relationship alone does not prove misuse.",
                "Where a person able to dominate another's will enters a transaction that appears unconscionable, Section 16(3) places on that person the burden to prove that undue influence did not induce it. State the relationship, the advantage, the transaction's terms and the burden; do not infer undue influence from price alone.",
            ]),
            ("Relief under Section 19A", [
                "An agreement caused by undue influence is voidable at the option of the affected party. The court may set it aside absolutely or, if that party has received a benefit, on terms that appear just. This differs from treating the bargain as automatically void.",
            ]),
        ],
    },
    {
        "key": "statements",
        "title": "4. Fraud and misrepresentation",
        "subtitle": "Sections 17 and 18",
        "blocks": [
            ("Fraud under Section 17", [
                "Fraud includes a knowingly false statement or one made without belief in its truth, active concealment, a promise made without intention to perform, another act fitted to deceive, or an act or omission specially declared fraudulent by law. It must be done by a party, or with the party's connivance, or by their agent, with intent to deceive or induce the other party or agent.",
                "Mere silence about facts likely to affect willingness to contract is generally not fraud unless circumstances create a duty to speak or silence itself is equivalent to speech. Ask what was said, hidden or promised, who knew what, and whether it induced assent.",
            ]),
            ("Misrepresentation under Section 18", [
                "This covers a positive assertion not warranted by the maker's information though believed true; a breach of duty without intent to deceive that misleads another to that person's prejudice and gains an advantage; or innocently causing a mistake about the substance of the agreement's subject. Distinguish a dishonest assertion from an unwarranted but honestly believed one.",
            ]),
        ],
    },
    {
        "key": "mistake",
        "title": "5. Mistake of fact and law",
        "subtitle": "Sections 20, 21 and 22",
        "blocks": [
            ("Both parties mistaken - Section 20", [
                "An agreement is void where both parties are mistaken about a fact essential to it. A wrong opinion about the value of its subject is not, by itself, such a mistake. Example: both agree to sell a specified horse, unaware that it had died before the bargain; the assumed existing subject is an essential factual error.",
            ]),
            ("Law and one-sided factual mistake", [
                "Section 21 says a contract is not voidable merely because it was caused by a mistake about a law in force in India; a mistake about a law not in force in India has the same effect as a mistake of fact. Section 22 says a contract is not voidable merely because one party was mistaken about a matter of fact.",
                "Use the word 'merely' carefully. If additional facts establish fraud, misrepresentation or a lack of agreement on the same thing, analyze those grounds independently. Sections 20-22 cannot be collapsed into one blanket rule about every mistake.",
            ]),
        ],
    },
    {
        "key": "consequences",
        "title": "6. Consequences of impaired consent",
        "subtitle": "Sections 19 and 19A; contrast with Section 20",
        "blocks": [
            ("Voidable at whose option?", [
                "Section 19 makes a contract induced by coercion, fraud or misrepresentation voidable at the option of the person whose consent was caused by it. For fraud or misrepresentation, that person may instead insist on performance and on being put in the position they would have occupied if the representation were true. Section 19A separately covers undue influence and permits the court to set aside on just terms.",
                "The Section 19 exception limits avoidance for misrepresentation or fraudulent silence if the affected party had means of discovering the truth with ordinary diligence. Fraud or misrepresentation that did not cause the consent does not make the contract voidable under Section 19. Apply the exception precisely rather than using it to excuse every deliberate falsehood.",
            ]),
            ("Void is a different result", [
                "A mutual mistake of an essential fact under Section 20 makes the agreement void. An unlawful consideration or object under Section 23 also makes the agreement void. Always identify the provision that produces the result.",
            ]),
        ],
    },
    {
        "key": "legality",
        "title": "7. Lawful object and consideration",
        "subtitle": "Sections 23 and 24",
        "blocks": [
            ("Six Section 23 grounds", [
                "A consideration or object is unlawful if it is forbidden by law; permitting it would defeat a law's provisions; it is fraudulent; it involves or implies injury to another's person or property; or the court regards it as immoral or opposed to public policy. The last two are separate grounds. An agreement with unlawful consideration or object is void.",
                "Object means the purpose of the agreement; consideration is the requested act, abstinence or promise exchanged. In a problem, identify both before assigning a Section 23 ground. Do not confuse an unfair price with an illegal purpose without additional facts.",
            ]),
            ("Mixed lawful and unlawful parts", [
                "Section 24 deals with a single consideration partly unlawful for one or more objects, or one of several considerations (or part of one) for a single object unlawful: the agreement is void. State the structure of the bargain rather than assuming that striking out words will always save it.",
            ]),
        ],
    },
    {
        "key": "practice",
        "title": "8. Practice and statutory index",
        "subtitle": "Short problems and primary reading",
        "blocks": [
            ("Problem A - false claim", [
                "A knowingly tells B a vehicle has never been damaged, intending B to buy; B relies and signs. Model approach: test Section 17 fraud and causation, then B's Section 19 option. If the statement was honestly believed but unwarranted, consider Section 18 instead.",
            ]),
            ("Problem B - shared factual error", [
                "Both parties agree on the sale of a specific item, unaware it was destroyed yesterday. Model approach: identify the essential fact and both parties' mistake under Section 20; do not call this a one-sided Section 22 mistake.",
            ]),
            ("Problem C - illegal purpose", [
                "A promises B money to falsify a record. Model approach: identify object and consideration; apply the particular Section 23 ground and conclude the agreement is void. Ask whether Section 24 is relevant if a single bargain mixes lawful and unlawful parts.",
            ]),
            ("Primary reading", [
                "Indian Contract Act, 1872, Sections 10, 13-24 (official India Code): https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf . Study the current statutory text and applicable developments before using these notes in a real dispute.",
            ]),
        ],
    },
]

def paragraph(pdf, text, y, *, style=BODY, width=BODY_WIDTH):
    item = Paragraph(text.replace("&", "&amp;"), style)
    _, height = item.wrap(width, PAGE_H)
    item.drawOn(pdf, LEFT, y - height)
    return y - height


def page_frame(pdf, number, *, section=False):
    pdf.setFillColor(NAVY)
    pdf.rect(0, PAGE_H - 13, PAGE_W, 13, fill=1, stroke=0)
    pdf.setFont("DejaVu-Bold", 9)
    pdf.setFillColor(GOLD)
    pdf.drawString(LEFT, PAGE_H - 36, "Sanhita360  /  LL.B LEGAL LEARNING")
    pdf.setStrokeColor(colors.HexColor("#CFDBE4"))
    pdf.line(LEFT, 49, RIGHT, 49)
    pdf.setFont("DejaVu", 8)
    pdf.setFillColor(MUTED)
    pdf.drawString(LEFT, 33, "GENERAL PRINCIPLES OF CONTRACT AND SPECIFIC RELIEF")
    pdf.drawRightString(RIGHT, 33, f"{number} / {len(SECTIONS) + 1}")
    if section:
        pdf.setFont("DejaVu-Bold", 8)
        pdf.setFillColor(BLUE)
        pdf.drawRightString(RIGHT, PAGE_H - 36, "BACK TO CONTENTS")
        pdf.linkRect("Back to contents", "contents", (RIGHT - 120, PAGE_H - 42, RIGHT, PAGE_H - 23), relative=0, thickness=0)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    pdf.setTitle("Chapter-4: Free Consent and Legality of Object")
    pdf.setAuthor("Sanhita360")
    pdf.setSubject("Linked study material on Indian Contract Act, 1872, Sections 13-24")

    pdf.bookmarkPage("contents")
    pdf.addOutlineEntry("Contents", "contents", level=0)
    page_frame(pdf, 1)
    y = PAGE_H - 93
    pdf.setFont("DejaVu-Bold", 26)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CHAPTER-4")
    y -= 38
    pdf.setFont("DejaVu-Bold", 17)
    pdf.drawString(LEFT, y, "Free Consent and")
    y -= 27
    pdf.drawString(LEFT, y, "Legality of Object")
    y -= 25
    pdf.setStrokeColor(GOLD)
    pdf.setLineWidth(2)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 33
    y = paragraph(pdf, "A structured study note on the Indian Contract Act, 1872, Sections 13-24. Select any topic below to jump to that page. Each page links back to this contents page.", y)
    y -= 30
    pdf.setFont("DejaVu-Bold", 12)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CLICKABLE CONTENTS")
    y -= 22
    for index, section in enumerate(SECTIONS, start=2):
        pdf.setFillColor(PALE)
        pdf.roundRect(LEFT, y - 39, BODY_WIDTH, 44, 6, fill=1, stroke=0)
        pdf.setFillColor(BLUE)
        pdf.setFont("DejaVu-Bold", 10)
        pdf.drawString(LEFT + 14, y - 13, section["title"])
        pdf.setFont("DejaVu", 8)
        pdf.setFillColor(MUTED)
        pdf.drawString(LEFT + 14, y - 29, section["subtitle"])
        pdf.setFont("DejaVu-Bold", 10)
        pdf.setFillColor(BLUE)
        pdf.drawRightString(RIGHT - 14, y - 19, f"{index:02d}")
        pdf.linkRect(section["title"], section["key"], (LEFT, y - 39, RIGHT, y + 5), relative=0, thickness=0)
        y -= 53
    pdf.showPage()

    for page_number, section in enumerate(SECTIONS, start=2):
        pdf.bookmarkPage(section["key"])
        pdf.addOutlineEntry(section["title"], section["key"], level=0)
        page_frame(pdf, page_number, section=True)
        y = PAGE_H - 92
        pdf.setFillColor(GOLD)
        pdf.setFont("DejaVu-Bold", 9)
        pdf.drawString(LEFT, y, f"CHAPTER-4  /  STUDY NOTE {page_number - 1}")
        y -= 37
        pdf.setFillColor(NAVY)
        pdf.setFont("DejaVu-Bold", 17)
        pdf.drawString(LEFT, y, section["title"])
        y -= 22
        pdf.setFillColor(MUTED)
        pdf.setFont("DejaVu", 9)
        pdf.drawString(LEFT, y, section["subtitle"])
        y -= 21
        pdf.setStrokeColor(GOLD)
        pdf.setLineWidth(1.2)
        pdf.line(LEFT, y, RIGHT, y)
        y -= 26
        for heading, paragraphs in section["blocks"]:
            pdf.setFillColor(BLUE)
            pdf.setFont("DejaVu-Bold", 10.2)
            pdf.drawString(LEFT, y, heading.upper())
            y -= 18
            for block in paragraphs:
                y = paragraph(pdf, block, y)
                y -= 11
            y -= 12
        if y < 75:
            raise ValueError(f"Content overflows page {page_number}: y={y}")
        pdf.showPage()

    pdf.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
