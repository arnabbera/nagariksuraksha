"""Build the linked Chapter 7 study PDF for the Contract Law course."""

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
OUTPUT = ROOT / "public/documents/contract-law/chapter-7-remedies-for-breach-and-specific-performance.pdf"
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
        "key": "map", "title": "1. Map of available remedies", "subtitle": "Compensation, restoration and exact performance",
        "blocks": [
            ("Start with the obligation", [
                "Identify the promise, the breach, the party injured and the loss. A monetary claim under the Indian Contract Act, 1872 differs from an order enforcing performance under the Specific Relief Act, 1963. A claim to restore a benefit received without a contract may rest on Sections 68-72 of the Contract Act.",
                "A right to put an end to future performance is distinct from compensation for loss already caused. The facts may support more than one form of relief, but the claimant must meet each remedy's conditions and cannot recover the same loss twice.",
            ]),
            ("Exam sequence", [
                "Ask: (1) Is there a breach or another basis for relief? (2) What loss or benefit must be proved? (3) Is the loss sufficiently connected to the breach? (4) Does the statute allow specific performance, an injunction, substituted performance or compensation? (5) What bars or limits apply?",
            ]),
        ],
    },
    {
        "key": "damages", "title": "2. Damages and remoteness", "subtitle": "Indian Contract Act, 1872 - Section 73",
        "blocks": [
            ("Compensation for breach", [
                "Section 73 allows compensation for loss or damage caused by breach that naturally arose in the usual course of things, or that the parties knew at the time of contracting was likely to result from breach. It excludes remote and indirect loss. State the facts known at formation before claiming an unusual consequential loss.",
                "When estimating loss, take account of the means that existed for remedying the inconvenience caused by non-performance. A claimant should make reasonable efforts to limit avoidable loss; the precise measure depends on evidence and the transaction, rather than a fixed sum for every breach.",
            ]),
            ("Illustration", [
                "A seller fails to deliver ordinary goods. The buyer promptly obtains substitutes at a higher market price. The price difference may be a direct measure of loss if proved. A separate factory shutdown loss requires analysis of whether the seller knew at contract formation that the shutdown was likely from delay.",
            ]),
        ],
    },
    {
        "key": "stipulated", "title": "3. Stipulated sums and rescission", "subtitle": "Indian Contract Act, 1872 - Sections 74-75",
        "blocks": [
            ("A named sum is a ceiling", [
                "If a contract names a sum payable on breach or contains a penalty stipulation, Section 74 permits reasonable compensation not exceeding the named sum or the stipulated penalty, whether or not actual damage or loss is proved. Do not assume the entire named amount is automatically payable. Explain why the proposed compensation is reasonable on the facts.",
                "Section 74 contains an exception concerning certain bonds or instruments given for a public duty or an act in which the public is interested. Read the statutory wording if that exception arises. A higher interest stipulation from default may also be a penalty under the Explanation.",
            ]),
            ("Rightful rescission", [
                "Section 75 entitles a person who rightfully rescinds a contract to compensation for damage sustained through its non-fulfilment. First establish the legal basis for rescission; do not treat every disappointed party's cancellation as rightful rescission.",
            ]),
        ],
    },
    {
        "key": "restitution", "title": "4. Restitution and quasi-contract", "subtitle": "Indian Contract Act, 1872 - Sections 68-72",
        "blocks": [
            ("Obligations resembling contract", [
                "Section 68 allows reimbursement from the property of a person incapable of contracting, or of someone that person is legally bound to support, for necessaries suited to that person's condition. Section 69 concerns reimbursement where a person interested in paying money that another is legally bound to pay makes that payment.",
                "Section 70 addresses a lawful act or delivery not intended gratuitously when the other person enjoys its benefit. Section 71 places a finder of goods under the same responsibility as a bailee. Section 72 requires return or repayment of a thing delivered or money paid by mistake or under coercion.",
            ]),
            ("Do not confuse the theories", [
                "A restitution claim focuses on returning a benefit or reimbursing a payment under the relevant provision. A Section 73 claim focuses on compensation for loss caused by breach. A void or rescinded agreement may separately raise Sections 64-65, addressed in Chapter-6.",
            ]),
        ],
    },
    {
        "key": "specific", "title": "5. Specific performance", "subtitle": "Specific Relief Act, 1963 - Sections 10, 14 and 16",
        "blocks": [
            ("Current statutory framework", [
                "As amended in 2018, Section 10 provides that specific performance of a contract shall be enforced subject to Section 11(2), Section 14 and Section 16. Avoid relying on an older shorthand that enforcement is available only when monetary compensation is inadequate. The operative statutory exceptions and personal bars still require close analysis.",
                "Section 14 excludes, among other categories, a contract whose substituted performance has been obtained under Section 20, a continuous duty the court cannot supervise, a contract dependent on personal qualifications, and a contract determinable in nature. Section 16 includes personal bars and requires a plaintiff to prove performance, or continuous readiness and willingness to perform, essential terms other than terms prevented or waived by the defendant.",
            ]),
            ("Apply the test", [
                "Identify the precise contract and promised act. Check whether Section 14 excludes it, whether the claimant satisfies Section 16, and whether another statutory provision affects relief. Chapter-8 examines the Specific Relief Act in greater detail.",
            ]),
        ],
    },
    {
        "key": "substituted", "title": "6. Substituted performance", "subtitle": "Specific Relief Act, 1963 - Sections 20-21",
        "blocks": [
            ("Performance through another person", [
                "Section 20 permits a party suffering breach to have the contract performed through a third party or by the party's own agency and recover the expenses and other costs actually incurred, subject to the section's conditions. Before doing so, that party must give the party in breach written notice of at least thirty days calling on that party to perform within the time specified.",
                "Once substituted performance has been obtained under Section 20, the party cannot claim specific performance against the party in breach, but the provision preserves a claim to compensation for breach. Section 21 deals with compensation in certain suits for specific performance; pleading and proof matter.",
            ]),
            ("Short example", [
                "A contractor abandons work. The owner gives the prescribed written opportunity to perform, then engages another contractor and documents the reasonable expense actually incurred. Analyze Section 20's conditions before assuming all replacement costs are recoverable.",
            ]),
        ],
    },
    {
        "key": "injunction", "title": "7. Injunctions", "subtitle": "Specific Relief Act, 1963 - Sections 36-42",
        "blocks": [
            ("Preventive relief", [
                "Sections 36-37 distinguish temporary and perpetual injunctions. Temporary injunctions operate for a specified time or until further order and are regulated by the Code of Civil Procedure. A perpetual injunction is granted by decree after hearing and on the merits; Section 38 addresses circumstances for that relief.",
                "Section 39 addresses mandatory injunctions to compel acts needed to prevent a breach of an obligation. Section 40 addresses damages in addition to or instead of injunction. Section 41 states grounds for refusing an injunction. Section 42 can permit enforcement of a negative agreement despite a positive promise not being specifically enforceable, subject to its proviso.",
            ]),
            ("Remedy choice", [
                "If the claimant seeks to stop threatened conduct, identify the obligation and ask which injunction and statutory limits apply. If the claimant seeks completion of a positive promise, examine specific performance and any applicable Section 14 bar. An injunction is not an automatic substitute for unavailable specific performance.",
            ]),
        ],
    },
    {
        "key": "practice", "title": "8. Problems and statutory index", "subtitle": "Choose a remedy and support each element",
        "blocks": [
            ("Problem A - unusual loss", [
                "A supplier knows only that B needs a machine part in the ordinary course. Delay also causes B to lose a secret one-day exhibition contract. Under Section 73, test direct loss separately from the exhibition loss, and ask whether that special consequence was known as likely at contract formation.",
            ]),
            ("Problem B - named sum", [
                "A contract names Rs. 2 lakh payable on any delay. A one-day delay occurs. Under Section 74, identify the stipulated ceiling and determine reasonable compensation on evidence; the clause does not itself establish entitlement to the full amount.",
            ]),
            ("Problem C - completion order", [
                "A singer promises a personal performance then refuses. Section 14's personal qualification bar matters to an order compelling that performance. A proposed restraint on performing elsewhere requires separate analysis under Section 42 and its proviso.",
            ]),
            ("Primary reading", [
                "Indian Contract Act, 1872, Sections 68-75: https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf . Specific Relief Act, 1963, Sections 10, 14, 16, 20-21 and 36-42 (current amended text): https://www.indiacode.nic.in/bitstream/123456789/1583/7/A1963-47.pdf .",
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
    pdf.setTitle("Chapter-7: Remedies for Breach and Specific Performance")
    pdf.setAuthor("Sanhita360")
    pdf.setSubject("Linked study material on Indian Contract Act, 1872, Sections 68-75 and Specific Relief Act, 1963")

    pdf.bookmarkPage("contents")
    pdf.addOutlineEntry("Contents", "contents", level=0)
    page_frame(pdf, 1)
    y = PAGE_H - 93
    pdf.setFont("DejaVu-Bold", 26)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CHAPTER-7")
    y -= 38
    pdf.setFont("DejaVu-Bold", 17)
    pdf.drawString(LEFT, y, "Remedies for Breach")
    y -= 27
    pdf.drawString(LEFT, y, "and Specific Performance")
    y -= 25
    pdf.setStrokeColor(GOLD)
    pdf.setLineWidth(2)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 33
    y = paragraph(pdf, "A structured study note on remedies under the Indian Contract Act, 1872 and the Specific Relief Act, 1963. Select any topic below to jump to that page. Each page links back to this contents page.", y)
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
        pdf.drawString(LEFT, y, f"CHAPTER-7  /  STUDY NOTE {page_number - 1}")
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
