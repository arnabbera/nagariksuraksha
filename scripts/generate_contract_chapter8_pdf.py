"""Build the linked Chapter 8 study PDF for the Contract Law course."""

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
OUTPUT = ROOT / "public/documents/contract-law/chapter-8-the-specific-relief-act-1963.pdf"
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
        "key": "framework", "title": "1. Act and remedy map", "subtitle": "Specific Relief Act, 1963 - Parts I-III",
        "blocks": [
            ("What the Act does", [
                "The Specific Relief Act, 1963 provides remedies directed at a particular civil right or obligation. Section 4 confines relief under the Act to enforcement of individual civil rights, not mere enforcement of penal law. Read the requested order and its statutory conditions before choosing a remedy.",
                "Sections 5-8 concern recovery of specific immovable and movable property. Section 9 permits a defendant to raise defenses available under contract law in a suit for relief based on contract. Sections 10-24 govern specific performance and connected relief; Sections 36-42 deal with preventive relief by injunction. Rectification, rescission, cancellation and declarations appear elsewhere in the Act (Sections 26-35).",
            ]),
            ("Answer sequence", [
                "Identify the right and exact order sought. Cite the relevant section, identify eligibility and exclusions, address the claimant's conduct and defenses, then state any ancillary relief that must be pleaded. Do not describe every specific remedy as an injunction.",
            ]),
        ],
    },
    {
        "key": "enforceability", "title": "2. Enforceability and partial relief", "subtitle": "Sections 9-13",
        "blocks": [
            ("Specific performance framework", [
                "Section 10, as substituted in 2018, says specific performance of a contract shall be enforced subject to Section 11(2), Section 14 and Section 16. This is not the former general test that money damages must be inadequate. Section 11 addresses contracts connected with trusts, including a limit where a trustee acts beyond powers or in breach of trust.",
                "Under Section 9, the defendant can invoke defenses under law relating to contracts. An unlawful, void or otherwise unenforceable agreement does not become enforceable merely because exact performance is requested.",
            ]),
            ("Part and imperfect title", [
                "Section 12 generally restricts specific performance of part of a contract, with defined exceptions for a small unperformed part compensable in money and for certain larger or separable parts. Apply the precise subsection, the proportion of the unperformed part and the required election or relinquishment.",
                "Section 13 gives a purchaser or lessee specified rights against a vendor or lessor with no title or imperfect title, including use of a title later acquired, subject to the section's conditions. Check who holds the title and what part can actually be conveyed.",
            ]),
        ],
    },
    {
        "key": "bars", "title": "3. Exclusions and personal bars", "subtitle": "Sections 14-16",
        "blocks": [
            ("Contracts not specifically enforceable", [
                "Section 14 excludes a contract for which substituted performance has been obtained under Section 20; a contract involving a continuous duty the court cannot supervise; one dependent on a party's personal qualifications; and one determinable in nature. The Act's current text follows the 2018 substitution, so beware of older notes reproducing the former Section 14.",
            ]),
            ("Who may seek the order", [
                "Section 15 identifies persons who may obtain specific performance, including a party and specified successors or representatives, subject to limits for contracts involving personal skill and other cases. Section 16 states personal bars to relief; among them, the plaintiff must prove performance or continuous readiness and willingness to perform essential terms, except terms prevented or waived by the defendant.",
                "Readiness and willingness are assessed on evidence, including conduct and ability to perform, not on a bare statement in the plaint. A defendant's prevention of performance is relevant; analyze facts before concluding the plaintiff failed the test.",
            ]),
        ],
    },
    {
        "key": "parties", "title": "4. Title, variation and parties", "subtitle": "Sections 17-19",
        "blocks": [
            ("Vendor and variation", [
                "Section 17 bars specific enforcement in favor of a vendor or lessor who has no title to the property and cannot give the purchaser or lessee a title free from reasonable doubt, or who cannot perform because of another person's concurrence that is refused. Section 18 permits a defendant to rely on specified variation between a written contract and the asserted agreement; examine the written terms and pleaded circumstances.",
            ]),
            ("Against whom relief may run", [
                "Section 19 generally permits enforcement against a party and certain persons claiming under that party by a title arising subsequently. A transferee for value who paid in good faith and without notice of the original contract is protected by the statutory exception. Test the timing, value, good faith and notice instead of assuming every subsequent buyer is bound.",
            ]),
        ],
    },
    {
        "key": "substitution", "title": "5. Substitution and infrastructure", "subtitle": "Sections 20, 20A-20C",
        "blocks": [
            ("Substituted performance", [
                "Under Section 20, a party affected by breach may, subject to the section, obtain substituted performance through a third party or the party's own agency and recover expenses and other costs actually incurred. Written notice of at least thirty days must first call on the party in breach to perform within the time specified. Once substitution is obtained, specific performance against that party cannot also be claimed; compensation for breach remains possible.",
            ]),
            ("Infrastructure provisions", [
                "Section 20A restricts injunctions in suits under the Act involving contracts for infrastructure projects specified in the Schedule where the order would impede or delay progress or completion. Section 20B provides for designated Special Courts; Section 20C sets a timeline for disposal of suits under the Act, with a permitted extension for recorded reasons. Apply these provisions only where their statutory conditions fit.",
            ]),
        ],
    },
    {
        "key": "ancillary", "title": "6. Compensation and connected orders", "subtitle": "Sections 21-24",
        "blocks": [
            ("Plead the complete relief", [
                "Section 21 allows compensation in a suit for specific performance, in addition to or in substitution for performance in the circumstances stated; the court is guided by Section 73 of the Indian Contract Act when assessing amount. The claim should be in the plaint, subject to the Act's rule permitting amendment.",
                "In a suit for specific performance of transfer of immovable property, Section 22 permits appropriate claims for possession, partition and separate possession, or refund of earnest money or deposit if performance is refused. These must be specifically claimed, subject to amendment under the section.",
            ]),
            ("Named sum and dismissal", [
                "Under Section 23, a sum named as payable on breach does not by itself preclude specific performance if the sum was intended to secure performance rather than give an option to pay instead; the court determines intent from the contract and circumstances. Section 24 bars a later suit for compensation for breach after dismissal of a suit for specific performance of that contract, while preserving another relief to which the plaintiff may be entitled by reason of the breach.",
            ]),
        ],
    },
    {
        "key": "injunctions", "title": "7. Preventive relief and injunctions", "subtitle": "Sections 36-42",
        "blocks": [
            ("Temporary and perpetual", [
                "Section 36 states that preventive relief is granted at the court's discretion by temporary or perpetual injunction. Section 37 says temporary injunctions operate for a specified time or until further order and are regulated by the Code of Civil Procedure, 1908. Perpetual injunctions follow a final decree after hearing and on the merits; Section 38 states when such an injunction may be granted.",
                "Section 39 deals with mandatory injunctions compelling acts needed to prevent a breach of an obligation. Section 40 permits damages in addition to or instead of a perpetual or mandatory injunction, with pleading requirements. Section 41 lists situations in which an injunction must be refused, including specified alternative remedies and conduct-related bars.",
            ]),
            ("Negative promise", [
                "Section 42 can allow an injunction enforcing a negative covenant despite inability to compel a linked affirmative promise, provided the plaintiff has performed the contract so far as it binds the plaintiff. Analyze the restriction separately from a request to force personal service.",
            ]),
        ],
    },
    {
        "key": "practice", "title": "8. Problems and statutory index", "subtitle": "Apply the amended Act to short facts",
        "blocks": [
            ("Problem A - later purchaser", [
                "A agrees to sell land to B, then transfers it to C. B seeks performance against C. Apply Section 19: when did C acquire title, did C pay value, and did C act in good faith without notice? Also test B's Section 16 readiness and willingness.",
            ]),
            ("Problem B - replacement contractor", [
                "A abandons agreed work. B gives the required written notice and later hires C to complete it. Apply Section 20 to the actual replacement costs and distinguish a remaining compensation claim from a barred claim to compel A's specific performance.",
            ]),
            ("Problem C - restraint", [
                "A seeks an injunction that would delay a scheduled infrastructure project. Test Section 20A and the project Schedule, then relevant Sections 36-42. A general assertion of harm alone does not resolve the statutory restrictions.",
            ]),
            ("Primary reading", [
                "Specific Relief Act, 1963, current amended text (official India Code): https://www.indiacode.nic.in/bitstream/123456789/1583/7/A1963-47.pdf . Read Sections 9-24 and 36-42 with the 2018 amendments, and consult Sections 5-8 and 26-35 for the other forms of specific relief.",
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
    pdf.setTitle("Chapter-8: The Specific Relief Act, 1963")
    pdf.setAuthor("Sanhita360")
    pdf.setSubject("Linked study material on Specific Relief Act, 1963, Sections 9-24 and 36-42")

    pdf.bookmarkPage("contents")
    pdf.addOutlineEntry("Contents", "contents", level=0)
    page_frame(pdf, 1)
    y = PAGE_H - 93
    pdf.setFont("DejaVu-Bold", 26)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CHAPTER-8")
    y -= 38
    pdf.setFont("DejaVu-Bold", 17)
    pdf.drawString(LEFT, y, "The Specific")
    y -= 27
    pdf.drawString(LEFT, y, "Relief Act, 1963")
    y -= 25
    pdf.setStrokeColor(GOLD)
    pdf.setLineWidth(2)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 33
    y = paragraph(pdf, "A structured study note on the Specific Relief Act, 1963, especially Sections 9-24 and 36-42. Select any topic below to jump to that page. Each page links back to this contents page.", y)
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
        pdf.drawString(LEFT, y, f"CHAPTER-8  /  STUDY NOTE {page_number - 1}")
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
