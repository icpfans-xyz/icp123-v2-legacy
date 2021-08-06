/*
 * @Author: your name
 * @Date: 2021-08-06 23:20:10
 * @LastEditTime: 2021-08-07 01:18:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/icp123-v2/libs/copy-code.js
 */
import $ from 'cash-dom'
import Toastify from 'toastify-js';

(function(cash) {
    'use strict'

    // Copy original code
    cash('body').on('click', '.copy-code', function() {
        const elementId = cash(this).data('target')
        cash(elementId)
            .find('textarea')[0]
            .select()
        cash(elementId)
            .find('textarea')[0]
            .setSelectionRange(0, 99999)
        document.execCommand('copy')

        Toastify({
            text: 'Copied!',
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true,
            className: 'toastify-content'
        }).showToast()
    })
})($)
