"""Build the linked Chapter 2 study PDF for the Contract Law course."""

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
OUTPUT = ROOT / "public/documents/contract-law/chapter-2-consideration-and-privity.pdf"
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
        "key": "meaning",
        "title": "1. Consideration under Section 2(d)",
        "subtitle": "The act, abstinence or promise exchanged",
        "blocks": [
            ("Statutory definition", [
                "Under Section 2(d), when, at the desire of the promisor, the promisee or any other person has done or abstained from doing, does or abstains from doing, or promises to do or abstain from doing something, that act, abstinence or promise is consideration for the promise. The statutory words cover past, present and future forms of consideration.",
                "The act must be at the promisor's desire. A helpful act performed without such a request does not become consideration merely because the promisor later benefits. Section 25(2) supplies a distinct exception for certain later promises to compensate a voluntary act; analyze its requirements separately.",
            ]),
            ("Spot the exchange", [
                "A promises to pay B Rs. 2,000 if B delivers a book. B's promised delivery can be consideration for A's promise. Identify the promisor, the requested act or abstinence, and the promise for which it is given. A benefit to the promisor is not the only possible form: a requested detriment or abstinence can also qualify.",
            ]),
        ],
    },
    {
        "key": "forms",
        "title": "2. Forms and source of consideration",
        "subtitle": "Past, present, future; promisee or another person",
        "blocks": [
            ("Three time frames", [
                "Past: at the promisor's desire, a person has already done or abstained from doing something before the promise. Present: the person does or abstains from doing it as the promise is made. Future: the person promises to do or abstain later. Section 2(d) expressly embraces each time frame; state the facts that make the act requested.",
                "Example: A asks B to repair a door, then promises payment after B completes the repair. B's completed work at A's desire can count as past consideration. If B independently repaired it with no request from A, do not assume Section 2(d) applies; check Section 25(2) if A later promises compensation.",
            ]),
            ("Who may provide it?", [
                "The promisee or any other person may provide consideration under Section 2(d). Thus consideration need not come personally from the promisee. This proposition does not by itself give every person who supplied consideration a right to sue on a contract to which that person is not a party.",
            ]),
        ],
    },
    {
        "key": "privity",
        "title": "3. Two different privity questions",
        "subtitle": "Privity of consideration versus privity of contract",
        "blocks": [
            ("Privity of consideration", [
                "This asks who supplied the act, abstinence or promise. Indian Contract Act Section 2(d) allows the promisee or another person to provide it, provided it is at the promisor's desire. A promisee therefore does not fail this test merely because someone else furnished the consideration.",
            ]),
            ("Privity of contract", [
                "This asks who is a party to the contract and may enforce its promise. Ordinarily a person who is not a contracting party cannot sue solely on that contract. A third person's provision of consideration under Section 2(d) does not automatically make that person a contracting party or confer an enforcement right.",
                "Example: A promises B to pay C, and B gives the requested consideration. C is named to receive the benefit but is not necessarily a party. Identify the parties and any independent legal basis for C's claim before saying C can enforce it. In a problem answer, keep the source of consideration separate from the identity of the claimant.",
            ]),
        ],
    },
    {
        "key": "thirdparties",
        "title": "4. Claims involving a third person",
        "subtitle": "Identify the legal route before finding a right",
        "blocks": [
            ("Recognized routes to examine", [
                "A beneficiary of a valid trust may claim through the trust relationship rather than merely as a stranger to a bargain. An assignee may claim transferred contractual rights, subject to the governing law and the terms of the assignment. In agency, the principal may be a contracting party through an authorized agent. Determine the basis and its requirements on the given facts.",
                "Some family arrangements or settlements may create a separate enforceable entitlement. Do not describe a promise that merely benefits a relative as automatically enforceable by that relative; show the arrangement, the claimant's right, and any required formalities.",
            ]),
            ("Exam method", [
                "Draw three names: promisor, promisee and claimant. Ask (1) who promised whom, (2) who supplied consideration under Section 2(d), and (3) whether the claimant is a party or has an independently established right. Treat each question separately.",
            ]),
        ],
    },
    {
        "key": "lawfulness",
        "title": "5. Lawful consideration and object",
        "subtitle": "Indian Contract Act, 1872 - Sections 23 and 24",
        "blocks": [
            ("Section 23's six grounds", [
                "Consideration or object is unlawful if it is forbidden by law; would defeat the provisions of a law if permitted; is fraudulent; involves or implies injury to the person or property of another; or the court regards it as immoral or opposed to public policy. The final two grounds are separate grounds; list them separately in an answer.",
                "An agreement with an unlawful object or consideration is void under Section 23. Explain which ground applies and why. A lawful payment does not save an agreement whose object is unlawful, and a lawful object does not save unlawful consideration.",
            ]),
            ("Section 24: mixed unlawfulness", [
                "If any part of a single consideration for one or more objects, or any one or any part of one of several considerations for a single object, is unlawful, the agreement is void. Apply the statutory formulation to the structure of the bargain. Do not assume that removing a phrase always cures the agreement.",
            ]),
        ],
    },
    {
        "key": "exceptions",
        "title": "6. Agreements without consideration",
        "subtitle": "Section 25's default rule and stated exceptions",
        "blocks": [
            ("Default and three principal exceptions", [
                "Section 25 says an agreement made without consideration is void unless it falls within its stated exceptions: (1) a written and registered agreement made on account of natural love and affection between parties standing in a near relation; (2) a promise to compensate, wholly or in part, someone who has already voluntarily done something for the promisor, or something the promisor was legally compellable to do; or (3) a written and signed promise by the debtor or a duly authorized agent to pay wholly or in part a debt that would be barred by limitation but for the promise.",
            ]),
            ("Gift and adequacy", [
                "Section 25 preserves a gift actually made as between donor and donee. Its Explanation 2 says inadequate consideration alone does not make an agreement void when consent was freely given; inadequacy may, however, be considered when deciding whether consent was freely given. A small amount and no consideration are different questions.",
            ]),
            ("Checklist", [
                "Identify the missing consideration, then test every element of the claimed exception: near relation plus natural love and affection plus writing and registration; a prior voluntary act or legally compellable act; or a signed written time-barred debt promise. Do not blend their requirements.",
            ]),
        ],
    },
    {
        "key": "revision",
        "title": "7. Practice and statutory index",
        "subtitle": "Work the facts before reaching a conclusion",
        "blocks": [
            ("Problem A - a stranger supplies the act", [
                "A promises B to sell a bicycle if C pays Rs. 3,000 at A's request. C pays. Model approach: Section 2(d) permits consideration from another person, so B's promise is not defeated merely because C paid. Whether C can enforce the bargain is a separate privity-of-contract question requiring a legal basis.",
            ]),
            ("Problem B - later gratitude", [
                "B spontaneously fixes A's gate. A later promises B Rs. 500. Model approach: Section 2(d)'s 'desire of the promisor' must be tested; B's spontaneous act was not requested. Consider whether Section 25(2)'s voluntary-act exception supports the subsequent promise, subject to its facts.",
            ]),
            ("Problem C - unlawful purpose", [
                "A promises B money to falsify a record. Model approach: identify the consideration and object, then Section 23's applicable ground or grounds. An unlawful object makes the agreement void; Section 24 may matter when a single bargain mixes lawful and unlawful parts.",
            ]),
            ("Primary statutory reading", [
                "Indian Contract Act, 1872, Sections 2(d), 23, 24 and 25 (official India Code): https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf . For a real dispute, check the current Act and applicable amendments and case law.",
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
    pdf.setTitle("Chapter-2: Consideration and Privity of Contract")
    pdf.setAuthor("Sanhita360")
    pdf.setSubject("Linked study material on Indian Contract Act, 1872, Sections 2(d), 23-25")

    pdf.bookmarkPage("contents")
    pdf.addOutlineEntry("Contents", "contents", level=0)
    page_frame(pdf, 1)
    y = PAGE_H - 93
    pdf.setFont("DejaVu-Bold", 26)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CHAPTER-2")
    y -= 38
    pdf.setFont("DejaVu-Bold", 17)
    pdf.drawString(LEFT, y, "Consideration and")
    y -= 27
    pdf.drawString(LEFT, y, "Privity of Contract")
    y -= 25
    pdf.setStrokeColor(GOLD)
    pdf.setLineWidth(2)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 33
    y = paragraph(pdf, "A structured study note on the Indian Contract Act, 1872, Sections 2(d), 23-25. Select any topic below to jump to that page. Each page links back to this contents page.", y)
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
        pdf.drawString(LEFT, y, f"CHAPTER-2  /  STUDY NOTE {page_number - 1}")
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
