/**
 * @file 封面按钮
 * @author yelvye@baidu.com
 */


/**
 * Copyright (c) 2017 Baidu, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
/**
 * @class ThumbsUpDownButton  封面按钮
 * @extends {RadioButton}
 */

let RadioButton = require('./RadioButton');
class ThumbsUpDownButton extends RadioButton {

    /**
     * ThumbsUpDownButton 构造方法.
     *
     * @param {string} selectedValue 选中的选项值
     * @public
     */
    constructor(selectedValue = '') {
        super(ThumbsUpDownButton.NAME, selectedValue);
    }

    /**
     * 设置选中的选项值
     *
     * @param {string} selectedValue 选中的选项值
     * @public
     */
    setSelectedValue(selectedValue) {
        if (ThumbsUpDownButton.THUMBS_ARR.indexOf(selectedValue) !== -1) {
            this.data.selectedValue = selectedValue;
        }
        else {
            this.data.selectedValue = ThumbsUpDownButton.THUMBS_UP;
        }
    }
}

ThumbsUpDownButton.NAME = 'THUMBS_UP_DOWN';

ThumbsUpDownButton.THUMBS_UP = 'THUMBS_UP';
ThumbsUpDownButton.THUMBS_DOWN = 'THUMBS_DOWN';

ThumbsUpDownButton.THUMBS_ARR = [
    ThumbsUpDownButton.THUMBS_UP,
    ThumbsUpDownButton.THUMBS_DOWN
];

module.exports = ThumbsUpDownButton;
