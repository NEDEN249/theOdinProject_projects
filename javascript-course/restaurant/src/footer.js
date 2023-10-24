import { createHTMLelement, content } from "./index";

function render_footer(){
    const footer = createHTMLelement("div", "footer", null);
    const footer_text = createHTMLelement("p", "footer-text", "This was created by <a href='https://github.com/NEDEN249'>NEDEN249</a>");
    const acknowledge = createHTMLelement("p", "footer-text", "Image by lesyaskripak on Freepik")
    footer.appendChild(footer_text);
    content.appendChild(footer);
}

export { render_footer };