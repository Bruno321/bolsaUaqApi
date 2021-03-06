const PDFDocument = require('pdfkit');

function buildPDF(dataCallback, endCallback, data) {

  // Create a document
  const doc = new PDFDocument({ size: 'LEGAL' });
  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  doc.fontSize(9).font('Helvetica').text(`Fecha de solicitud: ${data.fechaRegistro}`, 450, 35)

  doc.fontSize(25).font('Helvetica-Bold').text(data.nombreVacante, 73, 60) // Título de vacante

  doc.fontSize(12).font('Helvetica').text(data.empresa, 74, 105) // 

  doc.fontSize(12).font('Helvetica').text(`${data.rangoSueldo} - ${data.horario}`, 74, 135)

  doc.fontSize(12).font('Helvetica-Bold').text(`Carrera: ${data.carrera}`, 74, 165)

  doc.fontSize(12).font('Helvetica-Bold').text(`Área: ${data.area}`, 74, 185)

  doc.fontSize(12).font('Helvetica-Bold').text("Modalidad:", 74, 240).text("Lugar de contratación:", 230, 240).text("Dirección de la empresa:", 396, 240)

  doc.fontSize(12).font('Helvetica').text(`${data.tipoEmpleo} - ${data.tipoContratacion}`, 74, 260, {
    width: 135
  })

  doc.fontSize(12).font('Helvetica').text(`${data.ciudad}, ${data.estado}`, 230, 260, {
    width: 135
  })

  doc.fontSize(12).font('Helvetica').text(data.informacion, 396, 260, {
    width: 135
  })

  doc.moveDown(1);

  doc.fontSize(12).font('Helvetica-Bold').text("Contacto:", 74)
  // .moveDown(-1).text("Correo:", 230)

  doc.fontSize(12).font('Helvetica').text(data.contacto, 74)

  // doc.fontSize(12).font('Helvetica').moveDown(-1).text(data.contacto, 230)

  doc.fontSize(12).font('Helvetica-Bold').moveDown(1).text("Nivel de inlgés:", 74)

  doc.fontSize(12).font('Helvetica-Bold').moveDown(-1).text("No. Contratos:", 230)

  doc.fontSize(12).font('Helvetica').text(data.nivelIngles, 74)

  doc.fontSize(12).font('Helvetica').moveDown(-1).text(data.numeroPersonas, 230)

  doc.moveDown(3);

  doc.fontSize(12).font('Helvetica-Bold').text("Requisitos:", 74)

  doc.fontSize(12).font('Helvetica').text(data.requisitos, 74)

  doc.moveDown(1);

  doc.fontSize(12).font('Helvetica-Bold').text("Competencias:", 74)

  doc.fontSize(12).font('Helvetica').text(data.competencias, 74)

  doc.moveDown(1);

  doc.fontSize(12).font('Helvetica-Bold').text("Descripción del empleo:", 74)

  doc.fontSize(12).font('Helvetica').text(data.descripcion, 74)

  doc.moveDown(1);

  doc.fontSize(12).font('Helvetica-Bold').text("Prestaciones:", 74)

  doc.fontSize(12).font('Helvetica').text(data.prestaciones, 74)

  doc.end();
}


module.exports = {
  buildPDF
};

