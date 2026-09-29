"""Build the linked Chapter 3 study PDF for the Contract Law course."""

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
OUTPUT = ROOT / "public/documents/contract-law/chapter-3-capacity-to-contract.pdf"
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
        "key": "test",
        "title": "1. The capacity test",
        "subtitle": "Indian Contract Act, 1872 - Sections 10 and 11",
        "blocks": [
            ("Three conditions in Section 11", [
                "A person is competent to contract if that person has attained the age of majority under the law to which they are subject, is of sound mind, and is not disqualified from contracting by any applicable law. Test all three requirements at the time of the proposed contract. Section 10 requires competent parties as one condition of an enforceable agreement.",
                "The age of majority is determined under the applicable law, including the Majority Act, 1875 where it applies. For an exam problem, establish the person's age and the governing law rather than guessing from appearance or school status.",
            ]),
            ("Capacity is distinct from consent", [
                "A person may understand an offer and appear to agree but still lack legal capacity. Free consent is a separate requirement under Section 10. In an answer, address capacity before asking whether consent was free or the object was lawful.",
            ]),
        ],
    },
    {
        "key": "minors",
        "title": "2. A minor's agreement",
        "subtitle": "Effect of minority; Section 11 and judicial interpretation",
        "blocks": [
            ("The main rule", [
                "A minor is not competent to contract under Section 11. The Supreme Court reaffirmed in Krishnaveni v. M.A. Shagul Hameed (15 February 2024) that the minor's own sale agreement in that case was void from the outset and could not support a claim for specific performance. The Court referred to Mohori Bibee and Mathai Mathai. State the actual facts before using a case as a general formula.",
                "Do not label a minor's agreement merely voidable at the minor's option. A void agreement cannot become enforceable just because the minor later reaches majority. A new agreement after majority needs its own valid basis and requirements; do not assume that a signature after majority automatically ratifies the earlier void bargain.",
            ]),
            ("Who was the contracting party?", [
                "Check whether the document was signed by the minor personally or by a guardian acting within lawful authority. The 2024 Supreme Court order stressed the absence of guardian representation in the agreement before it. Guardian transactions require their own facts and governing law; do not treat every agreement involving a minor identically.",
            ]),
        ],
    },
    {
        "key": "necessaries",
        "title": "3. Necessaries and reimbursement",
        "subtitle": "Indian Contract Act, 1872 - Section 68",
        "blocks": [
            ("What Section 68 provides", [
                "If someone incapable of contracting, or a person whom they are legally bound to support, is supplied with necessaries suited to their condition in life, the supplier is entitled to reimbursement from the incapable person's property. The rule concerns reimbursement from property, not an ordinary personal contractual liability of the incapable person.",
                "Necessaries are assessed in context: suitability to the person's condition in life matters. Food, needed medical care or education may be candidates, but calling an item a 'necessary' is not enough. Ask whether it was actually needed and suited to the recipient's circumstances.",
            ]),
            ("Worked example", [
                "A supplier provides essential medicine suited to a minor's needs. If the Section 68 conditions are met, the supplier can claim reimbursement from the minor's property. A demand that the minor personally pay an agreed luxury price raises a different issue and cannot be assumed from Section 68.",
            ]),
        ],
    },
    {
        "key": "soundmind",
        "title": "4. Sound mind at the time of contract",
        "subtitle": "Indian Contract Act, 1872 - Section 12",
        "blocks": [
            ("Functional and time-specific inquiry", [
                "Under Section 12, sound mind for contracting means the ability, at the time of making the contract, to understand it and form a rational judgment about its effect on one's interests. A diagnosis, disability label or general impression is not a substitute for this statutory test. Identify the transaction and evidence of understanding at that time.",
                "A person usually of unsound mind may contract during an interval of sound mind. A person usually of sound mind may lack capacity during an interval of unsound mind. The Act illustrates this with lucid intervals and temporary impairment from fever or intoxication severe enough to prevent the required understanding and judgment.",
            ]),
            ("Apply rather than label", [
                "A signs while temporarily delirious. Ask whether A then understood the terms and their effect on A's interests. The same person signing after recovery may meet Section 12. The legal focus is capacity when each contract was made.",
            ]),
        ],
    },
    {
        "key": "disqualification",
        "title": "5. Disqualification by other law",
        "subtitle": "The third limb of Section 11",
        "blocks": [
            ("Find the actual restriction", [
                "Section 11 also asks whether another law to which a person is subject disqualifies that person from contracting. Identify that law, the exact scope of the restriction, and whether it applied on the date and to the transaction in question. Section 11 does not provide a universal list of disqualified persons.",
                "A legal restriction on a particular transaction is not necessarily a complete loss of capacity to make all contracts. Separate a person's status from a rule requiring a particular representative, approval, registration or other formality. Apply the specific statute before reaching a conclusion.",
            ]),
            ("Answer structure", [
                "Write: (1) the alleged disqualification, (2) the governing provision, (3) the facts bringing this transaction within it, and (4) the legal consequence. If the problem gives no such law, explain that Section 11 alone does not establish a disqualification by assertion.",
            ]),
        ],
    },
    {
        "key": "distinctions",
        "title": "6. Distinctions and common errors",
        "subtitle": "Minority, sound mind and necessaries",
        "blocks": [
            ("Keep the questions separate", [
                "Minority concerns legal age under Section 11. Sound mind concerns understanding and rational judgment at the moment of contracting under Section 12. Other legal disqualifications require an identified law. Section 68 concerns reimbursement for qualifying necessaries from property, despite incapacity to contract.",
                "Void is not the same as voidable: a claim that a minor's own agreement is merely voidable misstates the general rule affirmed by the Supreme Court in 2024. Necessaries do not create an unrestricted right to enforce the minor's contractual promise or recover from the minor personally.",
            ]),
            ("Evidence to look for", [
                "For age: date of birth, date of agreement and applicable majority rule. For sound mind: medical or witness evidence tied to the signing, the complexity of the terms and the person's actual understanding. For necessaries: the nature and need of the supplies, condition in life, legal support obligation and available property.",
            ]),
        ],
    },
    {
        "key": "practice",
        "title": "7. Practice and statutory index",
        "subtitle": "Apply each requirement in sequence",
        "blocks": [
            ("Problem A - new signature", [
                "M signed a purchase promise while a minor and repeats the promise after attaining majority. Model approach: the first agreement is void. Do not call the later statement a ratification that cures it; analyze whether a separate valid agreement was made after majority, including its consideration and other requirements.",
            ]),
            ("Problem B - temporary incapacity", [
                "B signs during a period of severe delirium but later becomes well. Model approach: apply Section 12 to B's ability to understand and judge the effect when signing. Later recovery alone does not answer whether B had capacity at the earlier moment.",
            ]),
            ("Problem C - supplies", [
                "S supplies needed medicine to a person unable to contract. Model approach: test whether it was a necessary suited to their condition in life and whether Section 68 permits reimbursement from that person's property. Avoid describing it as personal liability on a contract.",
            ]),
            ("Primary reading", [
                "Indian Contract Act, 1872, Sections 10-12 and 68 (official India Code): https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf . Supreme Court, Krishnaveni v. M.A. Shagul Hameed (15 February 2024): https://api.sci.gov.in/supremecourt/2019/17870/17870_2019_6_8_50456_Order_15-Feb-2024.pdf . Consult the current text and applicable law for real transactions.",
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
    pdf.setTitle("Chapter-3: Capacity to Contract")
    pdf.setAuthor("Sanhita360")
    pdf.setSubject("Linked study material on Indian Contract Act, 1872, Sections 10-12 and 68")

    pdf.bookmarkPage("contents")
    pdf.addOutlineEntry("Contents", "contents", level=0)
    page_frame(pdf, 1)
    y = PAGE_H - 93
    pdf.setFont("DejaVu-Bold", 26)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CHAPTER-3")
    y -= 38
    pdf.setFont("DejaVu-Bold", 17)
    pdf.drawString(LEFT, y, "Capacity to")
    y -= 27
    pdf.drawString(LEFT, y, "Contract")
    y -= 25
    pdf.setStrokeColor(GOLD)
    pdf.setLineWidth(2)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 33
    y = paragraph(pdf, "A structured study note on the Indian Contract Act, 1872, Sections 10-12 and 68. Select any topic below to jump to that page. Each page links back to this contents page.", y)
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
        pdf.drawString(LEFT, y, f"CHAPTER-3  /  STUDY NOTE {page_number - 1}")
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
