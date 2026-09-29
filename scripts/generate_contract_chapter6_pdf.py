"""Build the linked Chapter 6 study PDF for the Contract Law course."""

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
OUTPUT = ROOT / "public/documents/contract-law/chapter-6-discharge-of-contracts.pdf"
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
        "key": "map",
        "title": "1. What discharge means",
        "subtitle": "Indian Contract Act, 1872 - Sections 37-67",
        "blocks": [
            ("From promise to ending of duty", [
                "A valid contract creates obligations. Discharge describes the ending of a duty to perform, or the ending of the original contractual obligations, by performance or a legally recognized event. Identify which promise is affected, when the event occurred, and whether a claim for compensation or restitution remains.",
                "Under Section 37, parties must perform or offer to perform their respective promises unless performance is dispensed with or excused under the Act or another law. The Act addresses performance, refusal, time, reciprocal promises, impossibility, substitution, remission and the consequences of rescission or voidness. Different routes have different effects.",
            ]),
            ("Answer framework", [
                "State (1) the original promise, (2) the alleged mode of discharge and its section, (3) the triggering facts and timing, and (4) whether further performance, restitution or damages can still be claimed. Do not call every non-performance 'frustration'.",
            ]),
        ],
    },
    {
        "key": "performance",
        "title": "2. Performance and valid tender",
        "subtitle": "Sections 37-50",
        "blocks": [
            ("Actual and offered performance", [
                "A party ordinarily discharges a promise by performing it as agreed. Section 38 addresses a proper offer of performance refused by the promisee: the promisor is not responsible for non-performance and does not thereby lose contractual rights. The offer must be unconditional, at a proper time and place, and give a reasonable opportunity to ascertain capability and completeness; apply the section's specific requirements.",
                "Sections 40-41 address who must perform and the effect of accepting performance from a third person. A promise involving the promisor's personal skill may require that person's performance. If the promisee accepts performance from a third person, the promisee cannot afterwards enforce the same promise against the promisor under Section 41.",
            ]),
            ("Time, place and manner", [
                "Sections 46-50 supply rules for time, place and manner where the contract is silent or specifies a performance date or method. Identify the contractual terms before using statutory defaults. An attempted performance at the wrong time or place may not be a proper tender.",
            ]),
        ],
    },
    {
        "key": "reciprocal",
        "title": "3. Reciprocal promises and time",
        "subtitle": "Sections 51-55 and 67",
        "blocks": [
            ("Read the sequence of promises", [
                "Under Section 51, a promisor need not perform a reciprocal promise unless the promisee is ready and willing to perform the reciprocal promise. Section 52 looks to the order expressly fixed by the contract or required by the nature of the transaction. Sections 53-54 address prevention by one party and failure of a promise that must be performed first.",
                "Section 67 excuses non-performance to the extent caused by the promisee's neglect or refusal to provide reasonable facilities needed for performance. Distinguish a promisor's unwillingness from an obstacle created by the promisee.",
            ]),
            ("Time as an essential condition", [
                "Section 55 distinguishes cases where the parties intended performance at the specified time to be essential from cases where time was not essential. In the first, failure at that time makes the contract or unperformed part voidable at the promisee's option. In the second, delay alone does not make it voidable, although compensation may be available for resulting loss. Acceptance of late performance and notice are also relevant under the section.",
            ]),
        ],
    },
    {
        "key": "repudiation",
        "title": "4. Refusal and breach",
        "subtitle": "Section 39; distinguish termination from compensation",
        "blocks": [
            ("Refusal to perform wholly", [
                "If a party refuses to perform or disables himself from performing the promise in its entirety, Section 39 permits the promisee to put an end to the contract unless the promisee has signified, by words or conduct, acquiescence in its continuance. Identify the refusal, whether it concerns the entire promise, and what the promisee did afterwards.",
                "A minor departure or delay does not automatically satisfy Section 39's refusal of the promise in its entirety. Section 55 may govern a missed deadline, and other performance rules may matter. Ending future performance does not automatically erase an accrued claim for breach.",
            ]),
            ("Separate remedies", [
                "The consequences of breach, including compensation, are addressed further in Sections 73-75 and the next course chapter. First determine whether the contract was put to an end or remained on foot; then analyze the particular remedy rather than using the word 'discharged' as a substitute for damages analysis.",
            ]),
        ],
    },
    {
        "key": "impossibility",
        "title": "5. Impossibility and frustration",
        "subtitle": "Section 56",
        "blocks": [
            ("Two statutory situations", [
                "An agreement to do an act impossible in itself is void from the outset. A contract to perform an act that later becomes impossible, or becomes unlawful through an event the promisor could not prevent, becomes void when the act becomes impossible or unlawful. State when the event occurred and why it prevents the promised performance.",
                "Mere difficulty, increased expense or a disappointing bargain is not automatically impossibility under Section 56. Examine the precise obligation, any allocated risk and whether performance has truly become impossible or unlawful. A contract expressly contingent on an event may instead call for analysis under Sections 31-36.",
            ]),
            ("Financial consequences", [
                "Section 56 also addresses compensation where a promisor knew, or with reasonable diligence could have known, that the promised act was impossible or unlawful while the promisee did not. Section 65 may require restoration of an advantage when a contract becomes void. Do not assume frustration means every advance is automatically retained.",
            ]),
        ],
    },
    {
        "key": "agreement",
        "title": "6. Agreement, remission and waiver",
        "subtitle": "Sections 62 and 63",
        "blocks": [
            ("Substitute, rescind or alter - Section 62", [
                "If the parties agree to replace a contract with a new contract, rescind it, or alter it, the original need not be performed. Novation replaces the original obligation; a proposed change that never receives the necessary assent does not itself extinguish it. Name the parties to the old and new arrangements and identify the agreed change.",
            ]),
            ("Promisee's choice - Section 63", [
                "The promisee may dispense with or remit performance in whole or part, extend time, or accept any satisfaction the promisee thinks fit instead. For example, a creditor's acceptance of a lesser sum in full satisfaction can discharge the whole debt under the section. Show actual acceptance as satisfaction, not just a debtor's unilateral wish to pay less.",
                "Section 62 is an agreed substitution, rescission or alteration between the relevant parties. Section 63 concerns the promisee dispensing with, remitting or accepting substituted satisfaction. Identify which route the facts support.",
            ]),
        ],
    },
    {
        "key": "restoration",
        "title": "7. Restoration and other limits",
        "subtitle": "Sections 64-67; limitation and operation of law",
        "blocks": [
            ("Benefits after rescission or voidness", [
                "Under Section 64, when a person entitled to rescind a voidable contract does so, the other party need not perform promises in it, and the rescinding party must restore benefits received, so far as possible. Section 65 requires a person who received an advantage under an agreement discovered void or a contract that becomes void to restore it or make compensation to the person from whom it was received.",
                "Section 66 applies the rules for communicating and revoking a proposal to communicating or revoking rescission of a voidable contract. Section 67 concerns reasonable facilities for performance. Keep these consequences distinct from the ground that ended the original duty.",
            ]),
            ("Limitation and other laws", [
                "Expiry of a limitation period may bar a remedy without necessarily extinguishing the underlying obligation; the effect depends on the applicable limitation provision. Insolvency, death in a contract for personal services, merger of rights or another legal event may affect obligations under the governing law. Identify that law rather than claiming Section 37-67 alone supplies a universal discharge rule.",
            ]),
        ],
    },
    {
        "key": "practice",
        "title": "8. Practice and statutory index",
        "subtitle": "Pick the route, then test its facts",
        "blocks": [
            ("Problem A - accepted lesser sum", [
                "A owes B Rs. 5,000. B agrees to accept Rs. 2,000 in full satisfaction and takes it. Model approach: Section 63 permits the promisee to accept that satisfaction; distinguish it from a debtor who simply sends Rs. 2,000 without B accepting it in full discharge.",
            ]),
            ("Problem B - later illegality", [
                "A agrees to ship goods to a port. A later legal prohibition makes that promised voyage unlawful through an event A could not prevent. Model approach: Section 56 makes the contract void when performance becomes unlawful; consider Section 65 if an advance was received.",
            ]),
            ("Problem C - late delivery", [
                "A delivers after a named date; B accepts without reserving a claim. Model approach: Section 55 requires deciding whether time was essential, whether B accepted late performance, and whether notice of a compensation claim was given at acceptance. Do not infer automatic discharge or damages from lateness alone.",
            ]),
            ("Primary reading", [
                "Indian Contract Act, 1872, Sections 37-67 (official India Code): https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf . Remedies for breach are developed in Sections 73-75. Check the current statute and applicable law for real transactions.",
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
    pdf.setTitle("Chapter-6: Discharge of Contracts")
    pdf.setAuthor("Sanhita360")
    pdf.setSubject("Linked study material on Indian Contract Act, 1872, Sections 37-67")

    pdf.bookmarkPage("contents")
    pdf.addOutlineEntry("Contents", "contents", level=0)
    page_frame(pdf, 1)
    y = PAGE_H - 93
    pdf.setFont("DejaVu-Bold", 26)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CHAPTER-6")
    y -= 38
    pdf.setFont("DejaVu-Bold", 17)
    pdf.drawString(LEFT, y, "Discharge of")
    y -= 27
    pdf.drawString(LEFT, y, "Contracts")
    y -= 25
    pdf.setStrokeColor(GOLD)
    pdf.setLineWidth(2)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 33
    y = paragraph(pdf, "A structured study note on the Indian Contract Act, 1872, Sections 37-67. Select any topic below to jump to that page. Each page links back to this contents page.", y)
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
        pdf.drawString(LEFT, y, f"CHAPTER-6  /  STUDY NOTE {page_number - 1}")
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
