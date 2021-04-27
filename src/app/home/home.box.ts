import { Box } from 'hyperbox-js';

export class HomeBox extends Box {
  static _BoxConfig = {
    name: 'home-box'
  }

  display = (context) => `
    <div>
    <h1 class="title">HyperBox-JS</h1>
    <h2>Your neighbourhood friendly JS framework</h2>
    <h3>Create great web apps, fast!</h3>
    <div class="flex-row-space-around">
      <emoji-box _pid="${context.id}"></emoji-box>
      <emoji-box _pid="${context.id}" starting_index="1"></emoji-box>
      <emoji-box _pid="${context.id}" starting_index="2"></emoji-box>
      <emoji-box _pid="${context.id}" starting_index="3"></emoji-box>
    </div>
    <div>
      <h1>⚡️  Structured, Fast, Simple</h1>
      <p>
        With HyperBox-JS build well desinged web apps 
        that are quick and simple for devs to build!
      </p>
    </div>
    <div>
      <h1>📦  Example Box</h1>
      <pre>
        <code class="lang-js">
        import { Box } from 'hyperbox-js';
        // Import your .less file along with the box!!
        import './main.box.less';

        export class ExampleBox extends Box {

          static _BoxConfig = {
            name: 'example-box'
          }

          constructor() {
            super();
          }

          boxOnDisplayed = () => {
            // Execute logic here after the box has completed the first display.
          }

          display = (context) => {
            return \`
              &lt;div&gt;
                &lt;h1&gtHello world!&lt/;h1&gt
              &lt;div/&gt
            \`;
          }
        }
        </code>
      </pre>
    </div>
    <div>
      <h2>Useful Links</h2>
      <ul>
        <li>💎 <a href="https://www.npmjs.com/package/hyperbox-js" target="_blank">HyperBox-JS on npm</a></li>
        <li>⚡️ <a href="https://www.npmjs.com/package/hyperbox-js-cli" target="_blank">HyperBox-JS-CLI on npm</a></li>
      </ul>
    </div>
  `;
}