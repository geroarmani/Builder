class WebPage {
    constructor(
        public title: string = "",
        public header: string = "",
        public content: string = "",
        public footer: string = ""
    ) {}

    toString(): string {
        return `Title: ${this.title}\nHeader: ${this.header}\nContent: ${this.content}\nFooter: ${this.footer}`;
    }
}

class WebPageBuilder {
    private webPage: WebPage;

    constructor() {
        this.webPage = new WebPage();
    }

    setTitle(title: string): this {
        this.webPage.title = title;
        return this;
    }

    setHeader(header: string): this {
        this.webPage.header = header;
        return this;
    }

    setContent(content: string): this {
        this.webPage.content = content;
        return this;
    }

    setFooter(footer: string): this {
        this.webPage.footer = footer;
        return this;
    }

    build(): WebPage {
        return this.webPage;
    }
}

class WebPageDirector {
    static createArticle(content: string): WebPage {
        return new WebPageBuilder()
            .setTitle("Article Title")
            .setHeader("Article Header")
            .setContent(content)
            .setFooter("Article Footer")
            .build();
    }

    static createForm(title: string, fields: string): WebPage {
        return new WebPageBuilder()
            .setTitle(title)
            .setHeader("Form Header")
            .setContent(`Form Fields: ${fields}`)
            .setFooter("Form Footer")
            .build();
    }
}

// Примери за използване
const articlePage = WebPageDirector.createArticle("This is the article content.");
const formPage = WebPageDirector.createForm("Contact Form", "Name, Email, Message");

console.log("Article Page:");
console.log(articlePage.toString());
console.log("\nForm Page:");
console.log(formPage.toString());
