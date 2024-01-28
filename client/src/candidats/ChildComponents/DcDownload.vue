<template>
    <div class="hello">
        <button class="btn" v-on:click="createDoc()">DOWNLOAD DOCUMENT</button>
    </div>
</template>
<script>
import { WidthType, BorderStyle, Document, Paragraph, Packer, TextRun, creator,} from "docx";
import { saveAs } from "file-saver";
import { docx } from "docx";

export default {
    components: {
        WidthType,
        BorderStyle,
        Document,
        Paragraph,
        Packer,
        TextRun,
        saveAs,
        creator,
    },
    name: "dcDownload",
    data() {
        return {
            firstname: "Jhon",
            lastname: "Doe",
            message: "I just created a document using Vue.js 😲",
            Document:"",
        };
    },
methods:{
    createDoc() {
        alert("iam here");
        // Create a new Document an save it in a variable
        let doc = new Document();
        console.log("doc: "+doc);
        // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
        // This simple example will only contain one section
        alert("doc1: "+doc);
        doc.addSection({
            properties: {},
            children: [
                new Paragraph({
                    children: [new TextRun(`Hi! My name is 
     ${this.firstname} ${this.lastname}.`),],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: this.message,
                            bold: true,
                        }),
                    ],
                }),
            ],
        });
        alert("doc2: "+doc);
        // To export into a .docx file
        this.saveDocumentToFile(doc, `vuedoc.docx`);
    },
    saveDocumentToFile(doc, fileName) {
        const mimeType = "application/vnd.openxmlformats.officedocument.wordprocessingml.document";
        Packer.toBlob(doc).then((blob) => {
            const docblob = blob.slice(0, blob.size, mimeType);
            saveAs(docblob, fileName);
        });
    },
},
}
</script>