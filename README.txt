A Pen created at CodePen.io. You can find this one at https://codepen.io/AnkitaKhurana/pen/zPBjzY.

 # How To

* Push the "play" button on the bottom left to start the visualization
* Add any URL from [SoundCloud](https://soundcloud.com) by using the input on the bottom right


# Disclaimer

This pen is based on  [Jack Rugile](http://codepen.io/jackrugile/)'s canvas magic  [Circle Line Visualizer](http://codepen.io/jackrugile/pen/VjwRjj/). 

# Variation

You can find variations of this pen in my [NERD DISCO + Jack Rugile collection](http://codepen.io/collection/ArLkmx/).

# Change visualzation in JS

You can change the different parts of the visualization by playing with the `updateConfig` function. Inside this function you will find a `calculate` for every aspect of the visualization (like the radius or lineLength). Try to add / remove ranges or change the trigger (= the frequeny has to reach this value to change the current config value)


# What did I add? 

* [SoundCloud SDK](https://developers.soundcloud.com/docs/api/sdks) integration
* Web Audio API to analyze the audio (from [NERD DISCO](https://twitter.com/NERDDISCO))
* Input to change the URL for the analyzed audio
* [RxJS](https://github.com/Reactive-Extensions/RxJS) to use Observables