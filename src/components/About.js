import React, { useState } from "react";

export default function About(props) {
  return (
    <div className={`container data-bs-theme={${props.mode}}`}>
        <h2 className={`my-3 text-${props.mode ==='light'?'dark':'light'}`}>About Us</h2>
        <p className={`text-${props.mode === 'light'? 'dark':'light'}`}> Welcome to our Text Utility App! We're thrilled to have you here. This powerful yet simple application is designed to make your text-related tasks a breeze. Whether you need to manipulate, analyze, or format text, our app has got you covered.
<br />
<b>
Our Mission:
</b><br/>
At Text Utility, our mission is to provide users with a seamless and efficient experience for handling text. We understand that dealing with text can sometimes be time-consuming and cumbersome. That's why we built this app to offer a wide range of text utilities in one convenient place. Our goal is to save you time and effort while ensuring your text-related tasks are accomplished with ease.

<b><br/>
Text Manipulation: 
</b><br/>
Our app allows you to manipulate text in various ways, including converting case (uppercase, lowercase, title case), removing duplicates, and performing find and replace operations.
<b><br/>
Text Analysis:
</b><br/>
Analyze your text with ease! Count characters, words, paragraphs, and get insights into the most frequent words used in your text.
<b>
How to Use:
</b><br/>
Using our Text Utility App is a breeze! Simply paste or type your text into the provided input area. Choose the desired utility from the sidebar, configure any necessary options, and click the relevant button to apply the operation. The updated text will be displayed instantly, and you can copy it to your clipboard with a single click.
<b>
  
Privacy & Security:
</b><br/>
We take your privacy and security seriously. Our app processes your text directly in your web browser, meaning your text doesn't leave your device. No data is sent to our servers, ensuring your text remains confidential and safe.
<b><br/>
Feedback & Support:
</b><br/>
We are committed to constantly improving our Text Utility App. Your feedback is invaluable to us, so please feel free to share your thoughts, suggestions, or report any issues you encounter while using our app. For support inquiries or general feedback, reach out to us through the contact information provided below.
<br/>

<b>

Get Started:
</b><br/>
Ready to experience the power of efficient text handling? Head over to our home page and start using the Text Utility App now!

Thank you for choosing Text Utility! We hope our app becomes your go-to tool for all your text-related tasks. If you find our app helpful, don't forget to spread the word and share it with your friends and colleagues. Happy text manipulating!</p>
      {/* <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"  
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body"  >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
               
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body"  >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
               
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
      </div>
  );
}
