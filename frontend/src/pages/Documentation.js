import React from 'react';
import './Documentation.css';
import code1 from './Images/code1.PNG';
import code2 from './Images/code2.PNG';
import code3 from './Images/code3.PNG';
import code4 from './Images/code4.PNG';
import code5 from './Images/code5.PNG';
import code6 from './Images/code6.PNG';
import code7 from './Images/code7.PNG';
import circuit1 from './Images/Circuit 1.png';
import circuit2 from './Images/Circuit 2.jpg';
import circuit3 from './Images/Circuit 3.png';
import circuit4 from './Images/Circuit 4.png';
import circuit5 from './Images/Circuit 5.png';
import cad1 from './Images/CAD 1-1.png';
import cad2 from './Images/CAD 2-1.png';
import cad3 from './Images/CAD 3-1.png';
import cad4 from './Images/CAD 4.jpg';
import cad5 from './Images/CAD 5-1.jpg';
import cad6 from './Images/CAD 6-1.jpg';
import cad7 from './Images/CAD 7-1.png';


export default function Documentation() {
  return (
    <>
      <div className="title-div">
        <h1>Code</h1>
      </div>
      <div className="divider">
        <div className="image-side">
          <img src={code1} alt="Description" />
        </div>
        <div className="text-side">
          <p>
          I started by working on the navigation bar to allow us for a cleaner design and so the website won't get clustered. I was able to get it working by watching a few tutorial videos online and this was the end result.
          </p>
        </div>
      </div>

      <div className="divider">
    <div className="image-side">
      <img src={code2} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Next I went on to get the frontend, backend, and broker connected. I created my account for MQTT and followed instructions. As a result, I was able to get messages from the website to the backend to the broker.
      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={code3} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      I was able to implement a useState on the website to allow for keypresses to send messages to the backend. This allowed for easy delivery of messages between the two. I also made a visual to allow the user to see which key they were pressing. 
      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={code4} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      I got the environment set up on Thonny to be able to write code for the pico. I then started testing out the message transmission by sending and receiving messages from the broker. This allowed us to complete the communication between the website and rover. I also worked with Yuji to help me understand the wheels so we can get the wheels to run from the website. 
      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={code5} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      I installed a camera with the help of Yuji on the rover and we were able to get the image on the website. I was very surprised to see that all it took was one line of code to get it implemented on the website. 
      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={code6} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      We got the humidity, temperature, and sonic sensor to send information to the website and display it. We were one step closer to getting our task done, however, we noticed we were very short on time.
      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={code7} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      We tried getting the arm to work, however, we ran out of time and couldn’t complete it. I did, however, try to get them working using servos. We were able to get them moving individually, however, all together would have been a challenge. Here is some code I created temporarily to test it.
      </p>
    </div>
  </div>

  <div className="title-div">
        <h1>Electric</h1>
      </div>
      <div className="divider">
        <div className="image-side">
          <img src={circuit1} alt="Description" />
        </div>
        <div className="text-side">
          <p>
          It took hours to figure it out 10000 was 1000. Made sure all the sensors worked with Pico. Trying to connect the motor controller to Pico and figure out the wiring for a long time.
          </p>
        </div>
      </div>

      <div className="divider">
    <div className="image-side">
      <img src={circuit2} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Kept researching how motor controllers work. 

Figuring out how to make the wheels spin and move motors with Pico disconnected from the laptop (spent hours).

      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={circuit3} alt="Description" />
    </div>
    <div className="text-side">
      <p>
Made sure all four wheels move
Check the code on Pico so that it moves how it is supposed to move (front, back, turn right, left)

      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={circuit4} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Made a short circuit and smoked the cable. 
Everything was properly wired, but during the testing, a cable detached from one of the pins.

      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={circuit5} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Assembling everything together. Since moving the rover, was the most important part of the competition, checking the wiring was essential. 
Understanding that every wiring was necessary to attach and detach the battery we used since we could not keep attaching it to save the battery. 

Understanding how to make the same ground, what gives the power to the circuit, and how to ensure Pico receives signals properly was essential. 

We were also trying to add arms on top of the circuit, but we could not do it because I would risk not wiring properly, making the existing circuit not work, and showing noting during the presentation.

      </p>
    </div>
  </div>

  <div className="title-div">
        <h1>CAD / Designing</h1>
      </div>
      <div className="divider">
        <div className="image-side">
          <img src={cad1} alt="Description" />
        </div>
        <div className="text-side">
          <p>
          Identified design constraints: 
Rover needs a rigid chassis smaller than 10 x 12 in., an arm that can reach up to 10 in. from the ground, and a claw to grab 2 x 2 in. 5 oz. objects.
Limited to ⅛ in. thick acrylic, wood, and 3D printed parts.
Less than 72 hours to brainstorm, design, manufacture, test, and iterate a solution.
Began researching potential arm and claw ideas. Spent a long time figuring out how different arms work to see which one would be the easiest to create/ most effective for our rover. Looked online for inspiration.

          </p>
        </div>
      </div>

      <div className="divider">
    <div className="image-side">
      <img src={cad2} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Brainstormed different chassis ideas.
Originally decided to create an enclosed housing that would house all of our electronics but pivoted to a flat housing with sides. We pivoted to this design to decrease the complexity of our chassis and make the electronics more accessible.

      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={cad3} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Began playing around with different arm ideas in cad to see which one was most feasible. 
Created CAD mock-ups for the arm and chassis to show a proof of concept and iron out our ideas. Created brackets for our chassis to make it more rigid.
Began to create ideas for the claw. Went through three different iterations on SoldiWorks for the claw before settling on a design that we thought would work.
Ended day with beginning claw print.

      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={cad4} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Began 3d printing the brackets for our chassis.
Refined the Chassis CAD model so it has the appropriate holes to mount motors and brackets. Also began integrating electronic components into the chassis CAD model.

Realized that the initial brackets we printed were too thin so we redesigned a new bracket that better supported the chassis.

      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={cad5} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Created a wooden prototype of our chassis to check if the holes lined up correctly and allow other team members to begin testing their code for the wheels.
      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={cad6} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Began 3D printing arms and the arm base to test for the claw

Started with seeing the print from the night before. Claw was far too small so we needed another version.
Began printing new claw in the middle of day.
Ended the day with 3D printing final version of the claws

      </p>
    </div>
  </div>

  <div className="divider">
    <div className="image-side">
      <img src={cad7} alt="Description" />
    </div>
    <div className="text-side">
      <p>
      Began assembling the chassis out of acrylic with the brackets.

Began testing of the claw and arm

      </p>
    </div>
  </div>

    </>
  );
}