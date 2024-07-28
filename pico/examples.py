from connections import connect_mqtt, connect_internet
from time import sleep
from machine import Pin
#from dht import DHT11
from hcsr04 import HCSR04
from constants import ssid, password, mqtt_server, mqtt_user, mqtt_pass

in1 = Pin(15, Pin.OUT) 
in2 = Pin(14, Pin.OUT)
in3 = Pin(16, Pin.OUT)
in4 = Pin(17, Pin.OUT)

def cb(topic, msg):
    print(f"Topic: {topic}, Message: {msg}")
    if topic == b"direction":
        if msg == b"forward":
            print("Move forward")
            in1.value(1)
            in2.value(0)
            in3.value(1)
            in4.value(0)
            
        elif msg == b"backward":
            print("Move backward")
            in1.value(0)
            in2.value(1)
            in3.value(0)
            in4.value(1)
            
        elif msg == b"right":
            print("Move right")
            in1.value(0)
            in2.value(0)
            in3.value(0)
            in4.value(1)
            
        elif msg == b"left":
            print("Move left")
            in1.value(0)
            in2.value(1)
            in3.value(0)
            in4.value(0)
            
        elif msg == b"stop":
            print("stop")
            in1.value(0)
            in2.value(0)
            in3.value(0)
            in4.value(0)
        

def main():
    try:
        connect_internet(ssid, password)
        client = connect_mqtt(mqtt_server, mqtt_user, mqtt_pass)
        
        #sensor = DHT11(Pin(12, Pin.IN, Pin.PULL_UP))
        #sonic_sensor = HCSR04(trigger_pin=17, echo_pin=15, echo_timeout_us = 10000)
        #led = Pin('LED', Pin.OUT)

        client.set_callback(cb)
        client.subscribe("direction")
        while True:
            client.check_msg()
            #sensor.measure()
            #client.publish("temp", sensor.temperature())
            #client.publish("humidity", sensor.humidity())
            #client.publish("ultrasonic", sonic_sensor.distance_cm())
            sleep(1)
            
            
    except KeyboardInterrupt:
        print('keyboard interrupt')
        

    finally:
        in1.value(0)
        in2.value(0)
        in3.value(0)
        in4.value(0)
        
if __name__ == "__main__":
    main()


