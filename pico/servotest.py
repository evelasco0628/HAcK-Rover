import time
from servo import Servo

# Create our Servo object, assigning the
# GPIO pin connected the PWM wire of the servo
my_servo1 = Servo(pin_id=14)
my_servo2 = Servo(pin_id=13)
delay_ms = 25

#my_servo1.write(30)
for position in range(30, 110):  # Step the position forward from 0deg to 180deg
    print(position)  # Show the current position in the Shell/Plotter
    my_servo1.write(position)  # Set the Servo to the current position
    time.sleep_ms(delay_ms)  # Wait for the servo to make the movement
    
for position in reversed(range(30, 90)):  # Step the position reverse from 180deg to 0deg
    print(position)  # Show the current position in the Shell/Plotter
    my_servo1.write(position)  # Set the Servo to the current position
    time.sleep_ms(delay_ms)  # Wait for the servo to make the movement
    
time.sleep_ms(5000)
 
for position in range(30, 75):  # Step the position forward from 0deg to 180deg
    print(position)  # Show the current position in the Shell/Plotter
    my_servo2.write(position)  # Set the Servo to the current position
    time.sleep_ms(delay_ms)  # Wait for the servo to make the movement
    
for position in reversed(range(30, 75)):  # Step the position reverse from 180deg to 0deg
    print(position)  # Show the current position in the Shell/Plotter
    my_servo2.write(position)  # Set the Servo to the current position
    time.sleep_ms(delay_ms)  # Wait for the servo to make the movement
