# JobRecruita Business Docs

This folder contains all high-end business documents for the JobRecruita project, including:

- vision-mission.md / vision-mission.pdf
- executive-summary.md / executive-summary.pdf
- lean-canvas.md / lean-canvas.pdf
- pitchdeck.md / pitchdeck.pdf
- business-plan.md / business-plan.pdf

## How to Generate PDFs

To convert these markdown files to PDF, you can use [Pandoc](https://pandoc.org/) or VS Code extensions:

### Using Pandoc (recommended)

```sh
cd docs
pandoc business-plan.md -o business-plan.pdf
pandoc pitchdeck.md -o pitchdeck.pdf
pandoc lean-canvas.md -o lean-canvas.pdf
pandoc executive-summary.md -o executive-summary.pdf
pandoc vision-mission.md -o vision-mission.pdf
```

### Using VS Code
- Install the "Markdown PDF" extension
- Open any .md file, right-click, and select "Markdown PDF: Export (pdf)"

---
All documents are investor-ready and formatted for professional use. For custom branding or PowerPoint, see the markdown as a source.
