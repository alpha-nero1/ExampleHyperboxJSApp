import { Box, BoxOnDisplayed } from 'hyperbox-js';
import './emoji.box.less';

export class EmojiBox extends Box implements BoxOnDisplayed {
  static _BoxConfig = {
    name: 'emoji-box'
  }

  private static Emojis = ['💎', '✅', '⚡️', '📦', '🥳', '🚀', '🌏', '🔥', '🪃', '⚔️'];

  static _BoxInterface = {
    Inputs: {
      starting_index: 0
    },
    Vars: {
      currentEmojiIndex: 0
    }
  }

  boxOnDisplayed() {
    this.setCurrentEmojiIndex(this.getStarting_index());
  }

  protected getEmoji() {
    return EmojiBox.Emojis[this.getCurrentEmojiIndex()];
  }

  display = (context) => `
    <div>
      <rotation-box text="${context.getEmoji()}"></rotation-box>
    </div>
  `;
}