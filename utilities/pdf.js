const PDFDocument = require("pdfkit");
const path =
  "https://lh3.googleusercontent.com/pw/AM-JKLXWgs_M6SnJwtOhGERdBKoUgzUTbf_lhnOPr9Sbz9otOHPTUbySc3A4M-Wh4GCBBEro6Y8kBfXuuHgOK_QUuEiYkyekgWm-jDzLAujnkSiy2aYtFK-NmOhW4JmGKlPuR4sT0hQ9YlMqlmVcut5Pkt1fcg=s972-no";

function createNotice(res, data) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
  // var stream = doc.pipe(blobStream());

  generateHeader(doc);
  generateBody(doc, data);
  generateFooter(doc);

  doc.end();
  //   doc.pipe(fs.createWriteStream("notice.pdf"));
  res.contentType("application/pdf");
  doc.pipe(res);

  // stream.on("finish", function () {
  //   res.send(stream.toBlobURL("application/pdf"));
  // });
}

function generateHeader(doc) {
  doc
    // .image("C:\\Users\\KIIT\\Pictures\\Saved Pictures", 50, 30, { width: 80 })
    .fillColor("#000")
    .fontSize(30)
    .text("GYANKUNJ ACADEMY", 140, 40)
    .fontSize(20)
    .text("Gauriganj-6, Jhapa", 140, 75)
    .moveDown();

  generateHr(doc, 110);
}

function generateHr(doc, y) {
  doc.strokeColor("#aaaaaa").lineWidth(2).moveTo(50, y).lineTo(550, y).stroke();
}

function generateBody(doc, data) {
  doc
    .fontSize(15)
    .text(`Ref: ${data.refno}`, 50, 115)
    .text(`Date: ${data.date}`, 100, 115, { align: "right" })
    .moveDown(2)
    .font("Times-Bold")
    .text(`Subject: ${data.title}`, 50)
    .moveDown(2)
    .font("Helvetica")
    .text(`${data.body}`, {
      align: "justify",
    });
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .fillColor("blue")
    .text("gyankunjacademy@gmail.com", 50, 755, {
      align: "center",
      link: "mailto:gyankunjacademy@gmail.com",
    });

  generateHr(doc, 780);
}

module.exports = createNotice;
