/**
 * @package     plg_system_qleffect
 * @copyright   Copyright (C) 2023 Mareike Riegel
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

jQuery(document).ready(function () {

    typeWriter();
    jQuery('body').on('click', '.typewriter', function (e) {
        qlsystemeffectFunction(e);
    });

    function qlsystemeffectFunction(e) {
        e.preventDefault();
    }
});

/**
 *
 */
function typeWriter() {
    let objTypewriters = jQuery('body').find('.typewriter');
    let numSpeed, numSpeedOriginal = 120;

    jQuery.each(objTypewriters, function(index, elTag) {
        let objTag = jQuery(elTag);
        let i = 0;
        let strTag = objTag.text();
        objTag.text('');
        typeWriterLoop(objTag, strTag, i, numSpeedOriginal, numSpeed);
    });
}

/**
 *
 * @param objTag
 * @param strTagOriginal
 * @param i
 * @param numSpeedOriginal
 * @param numSpeed
 */
function typeWriterLoop(objTag, strTagOriginal, i, numSpeedOriginal, numSpeed) {
    if (i >= strTagOriginal.length) {
        setTimeout(function () {
            objTag.text('');
            i = 0;
            typeWriterLoop(objTag, strTagOriginal, i, numSpeedOriginal, numSpeed);
        }, numSpeed * 10
        );
        return;
    }

    // get string currently in tag
    let strTagCurrentUnblanked = objTag.text() + strTagOriginal.charAt(i);

    // generate tet with blank at the end
    let strTagBlanked = strTagCurrentUnblanked;
    if (1 === i%3) {
        strTagBlanked += '|';
    }

    // modify speed for every 20th typing
    if (numSpeed !== numSpeedOriginal) {
        numSpeed = numSpeedOriginal;
    }
    if (1 === i%20) {
        numSpeed = numSpeedOriginal*3;
    }

    // write
    objTag.text(strTagBlanked);
    i++;
    setTimeout(function() {}, numSpeed);
    setTimeout(function () {
            objTag.text(strTagCurrentUnblanked);
            typeWriterLoop(objTag, strTagOriginal, i, numSpeedOriginal, numSpeed);
        }, numSpeed
    );
}