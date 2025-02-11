declare module 'marked-emoji' {
    /**
     * Objects for emoji option to allow unicode and url emoji.
     */
    type EmojiObject = {
        url: string;
        char?: never;
    } | {
        url?: never;
        char: string;
    }

    /**
     * Options for configuring the marked-emojis extension
     */
    interface MarkedEmojiOptions {
        /**
         * An object with keys as emoji name and values as emoji. The values are
         * assumed to be image urls (as returned by Octokit) unless `unicode` option
         * is `true`. Values can also be an object with a `url` property or `char` property
         * to allow unicode and url emoji at the same time.
         */
        emojis: Record<string, string | EmojiObject>;
        /**
         * Whether `emojis` values are image urls (`false`) or unicode characters (`true`)
         */
        unicode?: boolean;
    }
    /**
     * Configures a marked extension to parse `:emoji:` as emoji either unicode
     * characters or images.
     *
     * @param options Options of the extension
     * @return A MarkedExtension to be passed to `marked.use()`
     */
    export function markedEmoji(options: MarkedEmojiOptions): import('marked').MarkedExtension;
  }
