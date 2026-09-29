"""Build the linked Chapter 5 study PDF for the Contract Law course."""

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
OUTPUT = ROOT / "public/documents/contract-law/chapter-5-void-agreements-and-contingent-contracts.pdf"
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
        "title": "1. Map of void agreements",
        "subtitle": "Indian Contract Act, 1872 - Sections 23-30",
        "blocks": [
            ("What void means", [
                "Section 2(g) calls an agreement void when it is not enforceable by law. Section 10 requires lawful consideration and object and an agreement not expressly declared void. Identify the specific ground instead of saying an arrangement is void merely because it seems unfair.",
                "Sections 23-24 concern unlawful consideration or object; Section 25 generally addresses want of consideration with stated exceptions. This chapter focuses on Sections 26-30: restraints of marriage, trade or legal proceedings, uncertainty and wagers. These are distinct rules with different statutory boundaries.",
            ]),
            ("Public policy", [
                "Section 23 makes an agreement void if the court regards its object or consideration as opposed to public policy. Name the alleged public-policy ground and explain its connection to the bargain; a general disapproval of a transaction is not an adequate statutory analysis.",
            ]),
        ],
    },
    {
        "key": "restraints",
        "title": "2. Marriage and trade restraints",
        "subtitle": "Sections 26 and 27",
        "blocks": [
            ("Marriage - Section 26", [
                "Every agreement in restraint of the marriage of any person other than a minor is void under Section 26. Apply the statutory qualification: the provision's wording treats a minor differently; it is not a general power to enforce every agreement about a minor's marriage.",
            ]),
            ("Trade - Section 27", [
                "An agreement restraining someone from exercising a lawful profession, trade or business is void to that extent. The Act expressly saves an agreement by the seller of goodwill to refrain from a similar business within specified local limits, so long as the limits appear reasonable to the court considering the nature of the business.",
                "Check the activity restrained, the period and place, the context and any applicable statutory exception or separate governing law. Do not treat every business restriction as automatically valid because it appears reasonable; the goodwill exception has its own conditions.",
            ]),
        ],
    },
    {
        "key": "proceedings",
        "title": "3. Proceedings and uncertainty",
        "subtitle": "Sections 28 and 29",
        "blocks": [
            ("Restraint of legal proceedings", [
                "Section 28 addresses agreements that absolutely restrict a party from enforcing contractual rights through the usual legal proceedings, limit the time for enforcing them, or extinguish rights or discharge liability on expiry of a specified period so as to restrict enforcement. The section contains savings, including for arbitration arrangements and certain bank or financial-institution guarantees. Read its current text before applying an exception.",
                "A clause choosing a lawful dispute-resolution route must be evaluated under the relevant saving and other governing law. Do not assume that every arbitration clause is a forbidden restraint or that every short contractual deadline is valid.",
            ]),
            ("Uncertainty - Section 29", [
                "An agreement is void when its meaning is not certain or capable of being made certain. Example: 'I will sell you some oil' without facts identifying what oil or how much may be too uncertain; surrounding terms or an established method of identification can change the result. Identify the missing essential term and whether the agreed method resolves it.",
            ]),
        ],
    },
    {
        "key": "wagers",
        "title": "4. Wagering agreements",
        "subtitle": "Section 30 and its stated exception",
        "blocks": [
            ("The statutory effect", [
                "Section 30 declares agreements by way of wager void and disallows a suit to recover alleged winnings or money entrusted to a person to await the result of a game or other uncertain event on which the wager was made. Ask whether the parties' reciprocal promises depend on an uncertain event in which their bargain is merely a stake on the outcome.",
                "The Act includes a limited saving for certain subscriptions, contributions or agreements to subscribe or contribute to a prize for a horse-race meeting that meets the statutory conditions. It is not a general exemption for all betting, and other applicable laws may also matter.",
            ]),
            ("Wager or genuine transaction?", [
                "A genuine insurance or sale arrangement may depend on an uncertain event without being a wager. Examine the parties' actual rights, obligations and interest in the transaction, not just the fact that an event is uncertain. State the facts supporting the characterization.",
            ]),
        ],
    },
    {
        "key": "contingent",
        "title": "5. Contingent contracts defined",
        "subtitle": "Sections 31 and 32",
        "blocks": [
            ("Collateral event - Section 31", [
                "A contingent contract is a contract to do or not do something if an event collateral to the contract happens or does not happen. The uncertain event is a condition on the contractual obligation, not the promised performance itself. Example: A agrees to pay B if B's house burns; the fire is collateral to the promise to pay.",
            ]),
            ("Event happening - Section 32", [
                "A contingent contract depending on an uncertain future event happening cannot be enforced unless and until that event happens. If the event becomes impossible, the contract becomes void. Draw a timeline: formation, occurrence or impossibility, and the point when enforcement is sought.",
            ]),
            ("Contrast with wager", [
                "Both arrangements may refer to an uncertain event. Section 31 presupposes a contract whose performance is conditional on a collateral event; Section 30 makes a wagering agreement void. Describe the substantive transaction and the role the event plays before classifying it.",
            ]),
        ],
    },
    {
        "key": "not_happening",
        "title": "6. Event not happening",
        "subtitle": "Sections 33 and 34",
        "blocks": [
            ("When non-occurrence is established", [
                "Under Section 33, a contingent contract depending on an uncertain future event not happening can be enforced when the happening of that event becomes impossible, and not before. Mere delay is not enough unless the contract or facts establish impossibility under the governing rule.",
                "Example: A agrees to pay B if a named ship does not return. If the ship sinks, its return has become impossible, so the condition of non-return is established under Section 33. If the ship is simply overdue, more facts are needed.",
            ]),
            ("Future conduct of a living person", [
                "Section 34 treats an event dependent on a person's future conduct as impossible when that person does something that makes it impossible to act in the contemplated way within any definite time, or otherwise than under further contingencies. Use the specific conduct and contractual condition in the answer.",
            ]),
        ],
    },
    {
        "key": "time",
        "title": "7. Fixed time and impossible events",
        "subtitle": "Sections 35 and 36",
        "blocks": [
            ("Happening within a fixed time", [
                "Under Section 35, if a contract depends on an uncertain event happening within a fixed time, it becomes void when that time expires without the event, or when the event becomes impossible before expiry. State both the deadline and whether the event occurred or became impossible.",
            ]),
            ("Not happening within a fixed time", [
                "A contract dependent on an uncertain event not happening within a fixed time may be enforced when the time expires without the event, or earlier if it becomes certain the event will not happen. Do not make the claimant wait for the deadline when non-occurrence has already become certain under the section.",
            ]),
            ("Impossible from the start", [
                "Section 36 makes an agreement contingent on an impossible event void, whether or not the parties knew of the impossibility when they agreed. Distinguish this from Section 32, where an initially possible event later becomes impossible.",
            ]),
        ],
    },
    {
        "key": "practice",
        "title": "8. Practice and statutory index",
        "subtitle": "Classify the event, then apply the provision",
        "blocks": [
            ("Problem A - uncertain quantity", [
                "A promises to sell B 'some grain' without a stated amount or method for identifying it. Model approach: ask whether the meaning can be made certain under Section 29 from agreed terms or context; do not assume a missing quantity is always supplied by the court.",
            ]),
            ("Problem B - collateral condition", [
                "A promises B payment if a named ship arrives by Friday. It sinks on Tuesday. Model approach: identify Section 31's collateral event and Section 35's fixed deadline. The event has become impossible before the deadline, so the contingent contract becomes void.",
            ]),
            ("Problem C - mere stake", [
                "A and B agree that whoever guesses tomorrow's rainfall correctly receives the other's stake. Model approach: analyze whether this is a wager under Section 30, rather than treating every event-linked promise as a contingent contract under Section 31.",
            ]),
            ("Primary reading", [
                "Indian Contract Act, 1872, Sections 23-36 (official India Code): https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf . Verify the current statutory text and other applicable law for real transactions.",
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
    pdf.setTitle("Chapter-5: Void Agreements and Contingent Contracts")
    pdf.setAuthor("Sanhita360")
    pdf.setSubject("Linked study material on Indian Contract Act, 1872, Sections 26-36")

    pdf.bookmarkPage("contents")
    pdf.addOutlineEntry("Contents", "contents", level=0)
    page_frame(pdf, 1)
    y = PAGE_H - 93
    pdf.setFont("DejaVu-Bold", 26)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CHAPTER-5")
    y -= 38
    pdf.setFont("DejaVu-Bold", 17)
    pdf.drawString(LEFT, y, "Void Agreements and")
    y -= 27
    pdf.drawString(LEFT, y, "Contingent Contracts")
    y -= 25
    pdf.setStrokeColor(GOLD)
    pdf.setLineWidth(2)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 33
    y = paragraph(pdf, "A structured study note on the Indian Contract Act, 1872, Sections 26-36. Select any topic below to jump to that page. Each page links back to this contents page.", y)
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
        pdf.drawString(LEFT, y, f"CHAPTER-5  /  STUDY NOTE {page_number - 1}")
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
