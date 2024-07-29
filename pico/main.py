from connections import connect_mqtt, connect_internet
from time import sleep
from machine import Pin
from dht import DHT11
from hcsr04 import HCSR04
from constants import ssid, password, mqtt_server, mqtt_user, mqtt_pass

in1 = Pin(14, Pin.OUT) # bottom left forward  
in2 = Pin(15, Pin.OUT) # bottom left backward 1
in3 = Pin(16, Pin.OUT) # bottom right forward 1
in4 = Pin(17, Pin.OUT) # bottom right backward 
in5 = Pin(12, Pin.OUT) # top left forward 
in6 = Pin(13, Pin.OUT) # top left backward 1
in7 = Pin(19, Pin.OUT) # top right forward 1
in8 = Pin(18, Pin.OUT) # top right backward

sensor = DHT11(Pin(5, Pin.IN, Pin.PULL_UP))
sonic_sensor = HCSR04(trigger_pin=2, echo_pin=3, echo_timeout_us = 10000)

def cb(topic, msg):
    print(f"Topic: {topic}, Message: {msg}")
    if topic == b"direction":
        if msg == b"forward":
            print("Move forward")
            in1.value(1)
            in2.value(0)
            in3.value(1)
            in4.value(0)
            in5.value(1)
            in6.value(0)
            in7.value(1)
            in8.value(0)
            
        elif msg == b"backward":
            print("Move backward")
            in1.value(0)
            in2.value(1)
            in3.value(0)
            in4.value(1)
            in5.value(0)
            in6.value(1)
            in7.value(0)
            in8.value(1)
            
        elif msg == b"right":
            print("Move right")
            in1.value(1)
            in2.value(0)
            in3.value(0)
            in4.value(1)
            in5.value(1)
            in6.value(0)
            in7.value(0)
            in8.value(1)
            
        elif msg == b"left":
            print("Move left")
            in1.value(0)
            in2.value(1)
            in3.value(1)
            in4.value(0)
            in5.value(0)
            in6.value(1)
            in7.value(1)
            in8.value(0)
            
        elif msg == b"stop":
            print("stop")
            in1.value(0)
            in2.value(0)
            in3.value(0)
            in4.value(0)
            in5.value(0)
            in6.value(0)
            in7.value(0)
            in8.value(0)
        

def main():
    try:
        connect_internet(ssid, password)
        client = connect_mqtt(mqtt_server, mqtt_user, mqtt_pass)

        client.set_callback(cb)
        client.subscribe("direction")
        client.subscribe("pinch")
        client.subscribe("arm")
        sensor_delay_count = 0; # So sensor doesn't get overloaded
        while True:
            client.check_msg()
            
            sensor_delay_count += 1
            if sensor_delay_count == 10:
                sensor.measure()
                client.publish("temp", str(sensor.temperature()))
                client.publish("humidity", str(sensor.humidity()))
                client.publish("ultrasonic", str(sonic_sensor.distance_cm()))
                sensor_delay_count = 0
            sleep(0.2)
            
            
    except KeyboardInterrupt:
        print('keyboard interrupt')
        

    finally:
        in1.value(0)
        in2.value(0)
        in3.value(0)
        in4.value(0)
        in5.value(0)
        in6.value(0)
        in7.value(0)
        in8.value(0)
        
if __name__ == "__main__":
    main()

