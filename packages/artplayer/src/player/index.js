import urlMix from './urlMix';
import attrMix from './attrMix';
import playMix from './playMix';
import pauseMix from './pauseMix';
import toggleMix from './toggleMix';
import seekMix from './seekMix';
import volumeMix from './volumeMix';
import currentTimeMix from './currentTimeMix';
import durationMix from './durationMix';
import switchMix from './switchMix';
import playbackRateMix from './playbackRateMix';
import aspectRatioMix from './aspectRatioMix';
import screenshotMix from './screenshotMix';
import fullscreenMix from './fullscreenMix';
import fullscreenWebMix from './fullscreenWebMix';
import pipMix from './pipMix';
import loadedMix from './loadedMix';
import playedMix from './playedMix';
import playingMix from './playingMix';
import autoSizeMix from './autoSizeMix';
import rectMix from './rectMix';
import flipMix from './flipMix';
import miniMix from './miniMix';
import loopMix from './loopMix';
import posterMix from './posterMix';
import autoHeightMix from './autoHeightMix';
import themeMix from './themeMix';
import titleMix from './titleMix';
import normalSizeMix from './normalSizeMix';
import subtitleOffsetMix from './subtitleOffsetMix';
import optionInit from './optionInit';
import eventInit from './eventInit';

export default class Player {
    constructor(art) {
        urlMix(art);
        attrMix(art);
        playMix(art);
        pauseMix(art);
        toggleMix(art);
        seekMix(art);
        volumeMix(art);
        currentTimeMix(art);
        durationMix(art);
        switchMix(art);
        playbackRateMix(art);
        aspectRatioMix(art);
        screenshotMix(art);
        fullscreenMix(art);
        fullscreenWebMix(art);
        pipMix(art);
        loadedMix(art);
        playedMix(art);
        playingMix(art);
        autoSizeMix(art);
        rectMix(art);
        flipMix(art);
        miniMix(art);
        loopMix(art);
        posterMix(art);
        autoHeightMix(art);
        themeMix(art);
        titleMix(art);
        normalSizeMix(art);
        subtitleOffsetMix(art);
        eventInit(art);
        optionInit(art);
    }
}
