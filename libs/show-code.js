/*
 * @Author: your name
 * @Date: 2021-08-06 23:20:10
 * @LastEditTime: 2021-08-07 01:19:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/icp123-v2/libs/show-code.js
 */
import $ from 'cash-dom'
import Velocity from 'velocity-animate';

(function(cash) {
    'use strict'

    // Show code or preview
    cash('body').on('change', '.show-code', function() {
        const elementId = cash(this).data('target')
        if (cash(this).is(':checked')) {
            cash(elementId)
                .find('.preview')
                .hide()
            Velocity(cash(elementId).find('.source-code'), 'fadeIn')
        } else {
            Velocity(cash(elementId).find('.preview'), 'fadeIn')
            cash(elementId)
                .find('.source-code')
                .hide()
        }
    })
})($)
