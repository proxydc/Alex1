<template>
  <div>
    <div @click="exportDocx">
      Generate .docx file
    </div>
  </div>
</template>

<script>
import { WidthType, BorderStyle, Document, Packer, Paragraph, TextRun } from "docx";
// import { saveAs } from 'file-saver'; // you can use this also
const FileSaver = require("file-saver");

export default {
  methods: {
    exportDocx() {
      // Create a new Document an save it in a variable
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun("Hello World"),
                  new TextRun({
                    text: "Foo Bar",
                    bold: true,
                  }),
                  new TextRun({
                    text: "אני אדם כמו כל אדם אחר בעולם חחחחחחחחחח הצחקתי את עצמי ",
                    bold: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });
      const mimeType =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      const fileName = "test.docx";
      Packer.toBlob(doc).then((blob) => {
        const docblob = blob.slice(0, blob.size, mimeType);
        FileSaver.saveAs(docblob, fileName);
      });
    },
  },
};
</script>