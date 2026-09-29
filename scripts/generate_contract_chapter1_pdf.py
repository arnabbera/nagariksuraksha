"""Build the linked Chapter 1 study PDF for the Contract Law course."""

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
OUTPUT = ROOT / "public/documents/contract-law/chapter-1-formation-and-essential-elements.pdf"
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
        "key": "definitions",
        "title": "1. The language of a contract",
        "subtitle": "Indian Contract Act, 1872 - Section 2",
        "blocks": [
            ("The statutory chain", [
                "A proposal is made when one person signifies to another a willingness to do or abstain from doing something, with a view to obtaining that other's assent. Once the person addressed signifies assent, the proposal is accepted and becomes a promise (Sections 2(a)-(b)).",
                "The maker of the proposal is the promisor; the person accepting it is the promisee. Consideration under Section 2(d) may be an act, abstinence or promise done at the desire of the promisor by the promisee or any other person. This chapter identifies consideration; its full rules are studied in Chapter 2.",
            ]),
            ("From promise to enforceable contract", [
                "A promise or set of promises forming consideration for each other is an agreement (Section 2(e)). An agreement enforceable by law is a contract (Section 2(h)). Thus, every contract is an agreement, but an agreement that lacks legal enforceability is not a contract.",
                "A void agreement is not enforceable by law; a voidable contract is enforceable at the option of one or more parties but not the other(s); and a contract becomes void when it ceases to be enforceable (Sections 2(g), 2(i) and 2(j)). Do not treat these labels as interchangeable.",
            ]),
            ("Quick example", [
                "A writes to B: 'I will sell my bicycle for Rs. 4,000.' B agrees to buy it for that price. There is a proposal and acceptance. Whether the resulting agreement is an enforceable contract still requires the Section 10 checks.",
            ]),
        ],
    },
    {
        "key": "proposal",
        "title": "2. Proposal and invitation to offer",
        "subtitle": "Sections 2(a), 3 and 4",
        "blocks": [
            ("Identify the proposal", [
                "Ask who communicated a definite willingness to do or abstain from something and sought the other person's assent. A proposal must reach the person to whom it is made: under Section 4, communication of a proposal is complete when it comes to that person's knowledge.",
                "The terms must make it possible to identify what is being offered and what assent would mean. In a problem question, quote the actual words and separate a genuine proposal from a preliminary conversation or request for information.",
            ]),
            ("Invitation to offer", [
                "A catalogue, general advertisement, display of goods or call for tenders commonly invites others to make proposals rather than itself constituting the final offer. The classification depends on its language, context and intention; do not apply a rigid rule to every advertisement.",
                "Example: a seller displays a laptop with a price tag. The buyer usually makes the offer by presenting it for purchase; the seller may then accept. In a tender process, the invitation may ask bidders to submit offers, but any binding terms of the tender must also be examined.",
            ]),
            ("Exam technique", [
                "Name the proposer and the addressee, identify the proposed act and terms, then ask whether assent alone would complete the bargain or further approval remains necessary.",
            ]),
        ],
    },
    {
        "key": "acceptance",
        "title": "3. Acceptance and modes of assent",
        "subtitle": "Sections 2(b), 7, 8 and 9",
        "blocks": [
            ("Absolute and communicated assent", [
                "Acceptance is the addressee's assent to the proposal. Section 7 requires acceptance to be absolute and unqualified. A reply changing the price, quantity or another material term is not acceptance of that proposal; analyze it as a new proposal instead.",
                "Section 7 also requires a usual and reasonable manner unless the proposer prescribes one. If a prescribed mode is not followed, the proposer may insist on that mode within a reasonable time after the acceptance is communicated. If the proposer does not do so, the Act treats the acceptance as accepted.",
            ]),
            ("Conduct can count", [
                "Section 8 recognizes acceptance by performance of a proposal's conditions or by acceptance of consideration offered for a reciprocal promise. Under Section 9, proposal or acceptance in words is express; one made otherwise than in words is implied.",
                "Example: A offers a reward on stated conditions. B, knowing the terms, performs the requested act. Examine whether the conditions were met and whether Section 8 supplies acceptance. Mere silence should not be assumed to amount to assent without a sound legal basis.",
            ]),
            ("Checklist", [
                "Who could accept? Was assent unqualified? Was the prescribed mode followed or waived? Did words or conduct communicate acceptance? At what point did communication become complete under Section 4?",
            ]),
        ],
    },
    {
        "key": "timing",
        "title": "4. Communication and revocation",
        "subtitle": "Sections 3-6",
        "blocks": [
            ("Track the timeline", [
                "Section 3 covers communication of proposals, acceptances and revocations by acts or omissions intended to communicate them, or having that effect. Under Section 4, a proposal is communicated when it comes to the addressee's knowledge.",
                "For an acceptance sent by post, Section 4 distinguishes the parties: as against the proposer, communication is complete when the acceptance is put into a course of transmission beyond the acceptor's control; as against the acceptor, when it reaches the proposer's knowledge. These statutory timing rules matter when deciding whether a later revocation is effective.",
            ]),
            ("Revocation windows", [
                "Section 5 allows a proposal to be revoked before the communication of acceptance is complete as against the proposer, not afterwards. An acceptance may be revoked before its communication is complete as against the acceptor, not afterwards.",
                "Section 6 recognizes revocation by communicated notice, expiry of the stated or reasonable time, failure of a condition precedent, or the proposer\u2019s death or insanity if the acceptor learns of it before acceptance. For revocation notices, Section 4 again distinguishes dispatch and receipt.",
            ]),
            ("Worked timeline", [
                "A posts an offer to B. B receives it, then posts an unqualified acceptance. The offer cannot ordinarily be revoked after B posts that acceptance, because communication is then complete as against A. B can revoke acceptance only before it reaches A. State the facts and sequence before drawing the conclusion.",
            ]),
        ],
    },
    {
        "key": "essentials",
        "title": "5. When an agreement is a contract",
        "subtitle": "Section 10 and connected provisions",
        "blocks": [
            ("Section 10 test", [
                "An agreement is a contract when it is made by parties competent to contract, with free consent, for lawful consideration and a lawful object, and is not expressly declared void. The Act also preserves other laws that require writing, witnesses or registration for particular contracts.",
                "Capacity is developed in Sections 11-12; consent and free consent in Sections 13-19A; lawful consideration and object in Section 23; and several void-agreement rules in Sections 24-30. These are signposts for later study, not substitutes for their full statutory tests.",
            ]),
            ("How to analyze a problem", [
                "First establish proposal and valid acceptance. Next identify the promises and consideration. Then apply each Section 10 requirement separately. Finally ask whether a special formality applies and whether the alleged agreement is void or voidable under a specific rule.",
                "Example: A and B agree on a sale price, but a statute requires registration of the instrument for the particular transaction. The Section 10 inquiry alone does not remove an independent statutory formality.",
            ]),
            ("Avoid a common error", [
                "An oral agreement is not automatically invalid. Equally, a signed document is not automatically enforceable. Analyze the requirements of the particular transaction and any applicable special law.",
            ]),
        ],
    },
    {
        "key": "practice",
        "title": "6. Apply the rules: three problems",
        "subtitle": "Practice with short model answers",
        "blocks": [
            ("Problem A - revised price", [
                "A offers to sell a desk to B for Rs. 8,000. B replies, 'I accept for Rs. 7,000.' Was A's offer accepted? Model approach: identify B's change to a material term. Under Section 7 it is not an absolute and unqualified acceptance; analyze B's reply as a counter-proposal. Do not assume A accepted it.",
            ]),
            ("Problem B - the last valid revocation", [
                "A mails a proposal to B. B receives it and posts an unconditional acceptance at noon on Monday. A's revocation reaches B on Tuesday. Model approach: communication of acceptance was complete as against A when B posted it, so the proposal could no longer be revoked by A at the time the notice reached B (Sections 4-5).",
            ]),
            ("Problem C - advertisement", [
                "A shop advertises 'chairs from Rs. 900, subject to availability.' C demands a chair for Rs. 900. Model approach: examine wording and context. This is commonly an invitation for customers to make an offer, not an unconditional proposal for every chair. The advertisement alone does not establish acceptance or a completed contract.",
            ]),
            ("Answer structure", [
                "State the relevant section, apply it to the exact words and chronology, identify any missing facts, and give a qualified conclusion. Do not import facts that the problem does not provide.",
            ]),
        ],
    },
    {
        "key": "revision",
        "title": "7. Revision and statutory index",
        "subtitle": "A concise map for examinations",
        "blocks": [
            ("Section map", [
                "Section 2: proposal, acceptance, promise, consideration, agreement, contract, void and voidable labels. Section 3: communication. Section 4: when communication is complete. Section 5: when proposal or acceptance may be revoked. Section 6: modes of revocation. Section 7: absolute acceptance and mode. Section 8: acceptance by conduct. Section 9: express and implied promises. Section 10: agreements that are contracts.",
            ]),
            ("Five things to remember", [
                "1. Identify offer and invitation separately. 2. Match the acceptance to the proposal without changing material terms. 3. Draw a timeline for dispatch, receipt and revocation. 4. Distinguish agreement from enforceable contract. 5. Apply Section 10 together with any applicable special-law formality.",
            ]),
            ("Suggested answer plan", [
                "Define the statutory concept; state the governing section; apply the parties' words or conduct; use the communication timeline if relevant; test enforceability; reach a reasoned conclusion. Make the legal basis explicit instead of relying on labels alone.",
            ]),
            ("Primary reading", [
                "The Indian Contract Act, 1872, Sections 2-10 (official India Code): https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf . Read the current statutory text and applicable local amendments when preparing for an examination or real transaction.",
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
    pdf.setTitle("Chapter-1: Formation and Essential Elements of Contract")
    pdf.setAuthor("Sanhita360")
    pdf.setSubject("Linked study material on Indian Contract Act, 1872, Sections 2-10")

    pdf.bookmarkPage("contents")
    pdf.addOutlineEntry("Contents", "contents", level=0)
    page_frame(pdf, 1)
    y = PAGE_H - 93
    pdf.setFont("DejaVu-Bold", 26)
    pdf.setFillColor(NAVY)
    pdf.drawString(LEFT, y, "CHAPTER-1")
    y -= 38
    pdf.setFont("DejaVu-Bold", 17)
    pdf.drawString(LEFT, y, "Formation and Essential")
    y -= 27
    pdf.drawString(LEFT, y, "Elements of Contract")
    y -= 25
    pdf.setStrokeColor(GOLD)
    pdf.setLineWidth(2)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 33
    y = paragraph(pdf, "A structured study note on the Indian Contract Act, 1872, Sections 2-10. Select any topic below to jump to that page. Each page links back to this contents page.", y)
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
        pdf.drawString(LEFT, y, f"CHAPTER-1  /  STUDY NOTE {page_number - 1}")
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
