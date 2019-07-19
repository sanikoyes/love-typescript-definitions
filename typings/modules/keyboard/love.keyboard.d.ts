declare namespace love {
    /**
     * Provides an interface to the user's keyboard.
     * @noSelf
     * @link [love.keyboard](https://love2d.org/wiki/love.keyboard)
     */
    export namespace keyboard {
        /**
         * Gets the key corresponding to the given hardware scancode.
         *
         *
         * Unlike key constants, Scancodes are keyboard layout-independent. For example
         * the scancode "w" will be generated if the key in the same place as the "w" key
         * on an American keyboard is pressed, no matter what the key is labelled or what
         * the user's operating system settings are.
         *
         *
         * Scancodes are useful for creating default controls that have the same physical
         * locations on on all systems.
         *
         * @param scancode The scancode to get the key from.
         * @return key, The key corresponding to the given scancode, or "unknown" if the scancode doesn't map to a KeyConstant on the current system.
         * @link [love.keyboard.getKeyFromScancode](https://love2d.org/wiki/love.keyboard.getKeyFromScancode)
         */
        export function getKeyFromScancode(scancode: Scancode): KeyConstant;

        /**
         * Gets the hardware scancode corresponding to the given key.
         *
         *
         * Unlike key constants, Scancodes are keyboard layout-independent. For example
         * the scancode "w" will be generated if the key in the same place as the "w" key
         * on an American keyboard is pressed, no matter what the key is labelled or what
         * the user's operating system settings are.
         *
         *
         * Scancodes are useful for creating default controls that have the same physical
         * locations on on all systems.
         *
         * @param key The key to get the scancode from.
         * @return scancode, The scancode corresponding to the given key, or "unknown" if the given key has no known physical representation on the current system.
         * @link [love.keyboard.getScancodeFromKey](https://love2d.org/wiki/love.keyboard.getScancodeFromKey)
         */
        export function getScancodeFromKey(key: KeyConstant): Scancode;

        /**
         * Gets whether key repeat is enabled.
         *
         * @return enabled, Whether key repeat is enabled.
         * @link [love.keyboard.hasKeyRepeat](https://love2d.org/wiki/love.keyboard.hasKeyRepeat)
         */
        export function hasKeyRepeat(): boolean;

        /**
         * Gets whether text input events are enabled.
         *
         * @return enabled, Whether text input events are enabled.
         * @link [love.keyboard.hasTextInput](https://love2d.org/wiki/love.keyboard.hasTextInput)
         */
        export function hasTextInput(): boolean;

        /**
         * Gets whether is screen keyboard supported.
         * @returns supported, Whether the screen keyboard supported or not.
         * @link [love.keyboard.hasScreenKeyboard](https://love2d.org/wiki/love.keyboard.hasScreenKeyboard)
         * @since 0.10.0
         */
        export function hasScreenKeyboard(): boolean;

        /**
         * Checks if one of the specified keys is down.
         * @param keys The keys to check.
         * @return _true_ if any supplied key is down, _false_ if not.
         * @link [love.keyboard.isDown](https://love2d.org/wiki/love.keyboard.isDown)
         */
        export function isDown(...keys: Array<KeyConstant>): boolean;

        /**
         * Checks if one of the specified Scancodes has been pressed.
         * @param scancodes The Scancodes to check.
         * @return _true_ if any supplied Scancode is down, _false_ if not.
         * @link [love.keyboard.isScancodeDown](https://love2d.org/wiki/love.keyboard.isScancodeDown)
         */
        export function isScancodeDown(...scancodes: Array<Scancode>): boolean;

        /**
         * Enables or disables key repeat. It is disabled by default.
         *
         *
         * The interval between repeats depends on the user's system settings.
         *
         * @param enable Whether repeat keypress events should be enabled when a key is held down.
         * @link [love.keyboard.setKeyRepeat](https://love2d.org/wiki/love.keyboard.setKeyRepeat)
         */
        export function setKeyRepeat(enable: boolean): void;

        /**
         * Enables or disables text input events. It is enabled by default on Windows,
         * Mac, and Linux, and disabled by default on iOS and Android.
         *
         * @param enable Whether text input events should be enabled.
         * @link [love.keyboard.setTextInput](https://love2d.org/wiki/love.keyboard.setTextInput)
         */
        export function setTextInput(enable: boolean): void;

        /**
         * Enables or disables text input events. It is enabled by default on Windows,
         * Mac, and Linux, and disabled by default on iOS and Android.
         *
         * @param enable Whether text input events should be enabled.
         * @param x On-screen keyboard x position.
         * @param y On-screen keyboard y position.
         * @param w On-screen keyboard width.
         * @param h On-screen keyboard height.
         * @link [love.keyboard.setTextInput](https://love2d.org/wiki/love.keyboard.setTextInput)
         */
        export function setTextInput(enable: boolean, x: number, y: number, w: number, h: number): void;
    }
}
