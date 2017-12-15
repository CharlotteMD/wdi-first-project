# Whodunit Game - Read Me

- [Play Whodunit on Heroku](https://whodunit-charmd.herokuapp.com/)

- [View Whodunit on GitHub](https://github.com/CharlotteMD/wdi-first-project.git)

# Game Instructions

### The aim of the game is to match the mugshot with the image that you saw on the CCTV camera by selecting the correct facial features from the dropdown menu.

1. You will see the suspect on the CCTV camera. You need to memorise the suspect's facial features before the screen goes blank.

2. Use the dropdown list on the right to select the face that you think you saw.

3. When you think your mugshot matches the suspect that you saw on the CCTV camera, press the “Accuse” button.

4. If you are correct, the suspect will be sent to prison! If you are wrong, you will allow the suspect to escape!

5. You need to imprison as many villains as you can before the time is up!

# Technologies Used

- HTML 5
- CSS 3
- JavaScript
- JQuery
- Google Fonts
- GitHub
- Git
- Heroku
- Canva
- HTML Audio
- Animation 

# Approach Taken

1. Once I had come up with the idea I drew out some wire frames which you can find in - ./Project-1-Game.bmpr. The game didn’t change much from the original drawings. I had initially planned to have the user select 5 different facial features (hair, eyes, nose, mouth and perhaps suspect number - to work on number recognition) but in the end I stuck to 3 due to timing, designing complex enough pictures and difficulty level of the game.

2. Next I created the image files. I used canva.com. You can find all my images under ./images. The problem with my images is that they were originally huge so I had to compress them substantially (by around 80%). I needed the images early on as without them the game wouldn’t work.

3. I drafted a very simple HTML file. The file didn’t change much over the project. All I have added is the timer which was a later function.

4. I added basic CSS so that the HTML was arranged properly one the page.  At this stage I added colour but most of the design elements were added much later on.

5. Then I was ready to start the JavaScript.  I found the first bit of game logic relatively straight forward.  I created a formula to generate a random number between 1 & 10 (1 & 2 during early test phases) for each of the eyes, nose and mouth sections. These numbers were then used to set the suspect image on the CCTV camera - eyes-{randomNumberEye}.png etc. The user then selected the eyes, nose and mouth from a drop down list, the value of which matched the image file, which appeared on the mug screen. The computer then calculated whether the images that the user chose match the one the computer randomly generated.

6. Next I worked on the timeouts.  I set timeouts on the CCTV so that after 5 seconds the screen would go back to static.  Later on I realised, you could use the selectors while you could still see the suspect on the CCTV screen - obviously a cheat! So I had to disable the selector div while the CCTV div was showing the suspect.  

7. I designed a win and lose sequence with cell bars, a villain and sound effects.  A bug I had was that you could move on to the next suspect before the sequence had finished which made the CCTV camera sequence out of sync with the selectors being disabled - a frustrating user experience, so I disabled the next suspect button while the sequence was playing. I also realised as my score function relied on how many times the win sequence ran, if you clicked accuse multiple times for one win, you could also cheat your score.  I disabled the accuse button after the win sequence had run once by using a true false variable.

8. I wanted to make the game harder and more competitive so I added a timer to see how many times you could win in 90 seconds.  I also needed to add a timer within the CSS and HTML which I designed on Canva and placed on the page through CSS.

9. Finally I made the game mobile responsive.

10. As part of the mobile responsiveness, I had to add a scroll animation so that when you click on the instructions button, you automatically scroll to the bottom of the page.  

# Wins

- I really enjoyed this project, specifically:
  - I can’t get over the buzz of when you have worked away on a problem and then you fix it! Over the course of the project, I have developed a few strategies to tackle problems - I’ve had some of my best ideas on the tube after I have stepped away and taken some time to regroup.


- I cant believe how much I have learnt in such a short space of time, JavaScript in particular. It has been a brilliant opportunity to put my learning into practice and build my confidence in my new skillset. I have also built confidence in working with StackOverflow, MDN and other blogs such as CSS Tricks and Sidebar.

- Coding in general. I am delighted that no part of this project has been a chore. I have enjoyed developing new features.  Even when it has meant late nights and early mornings, I have been keen to create the best product that I am currently capable of and look forward to developing it further as my skills develop.

# Blockers

- The first day of my project I achieved a huge amount which was fantastic but had the effect that the next few days felt in comparison that I wasn’t achieving very much. I had to put this into perspective. I made lots of lists of what I had achieved already and what I still wanted to achieve and I found this really helped, particularly when I could tick things off the list.

- I found the CSS difficult, flex box in particular.  I think this will take practise and already I feel much better at CSS than I was a few days ago. Particularly with flexbox, I am more willing to take risks to move things about than I initially was. I have also learnt a lot of new CSS terms, and also how to relate it to JavaScript.

- I found a number of bugs.
  - One was simply that the 40 images that the game relies upon were huge files.
    - I have now learnt how small files need to be in order to make the game fast enough to run with all images appearing in sync.  If the game was to become a downloadable app, I would like to make the images even smaller.

  - Another bug I had was that the timer feature to hide the selectors, runs out of sync with the suspect being shown on the CCTV camera.  This was when the next suspect sequence was started before the win lose sequence had finished.
    - I fixed this by disabling the “next suspect” button until the win lose sequence had run so that the user can no longer make the sequence run out of sync. I also greyed out the button so it is clear when you can and cant click on the button.

  - Originally, you score by the amount of times the win sequence runs.  But if you click accuse more than once, having won, you can effectively cheat.  
    - I fixed this by adding a variable = accused, so that if you have already accused the villain the button is disabled and you cant re accuse them and re run the win sequence.  I also greyed out the accuse button so it was clear that that you can only click once.  You can click it again after the computer has shown you a new suspect.

# Future Features

The game lends itself well to being a memory game for people suffering with dementia. A common symptom for people with this condition can be loss of recognition for their relatives.  I would adapt the game to use human faces so they could re learn to recognise people by various facial characteristics, exercising that part of the brain.  An advanced feature could be uploading photos of their own relatives and matching them with the correct names.

I’d also like to add levels to the game - allowing the user to change:
- How long they want to play the game for (the main countdown timer),
- How long they see the suspect for before they have to guess,
- How many facial features they are choosing between within the dropdown list (I currently have a library of almost 90 features),
- How many separate facial features they have to choose (hairstyles, suspect number, accessories, ears etc)

With more time, I would have liked to have improved some of the design of the game.
 - In particular I would like to have gotten rid of the alert and added a hidden div which told you your end score.
 - I would also like the instructions to pop up in a hidden div when you click on the instructions button to save space on the main screen.   
 - The game is mobile responsive but it could be better designed to fit on a mobile screen, whereby you could more easily access all key elements of the game - selectors, buttons, timer etc.  
