import { orderByProps } from "../app.js";

test("should return an array with the object's elements in the correct order", () => {
    const testObject = {
        name: 'маг',
        health: 45,
        level: 11,
        strength: 28, 
        attack: 30,
        defence: 20,
        endurance: 23, 
        stealth: 15, 
        charisma: 31
      };
    const result = orderByProps(testObject, ['level', 'name', 'strength'])
    const expected = [
        {key: 'level', value: 11}, 
        {key: 'name', value: 'маг'}, 
        {key: 'strength', value: 28},
        {key: 'attack', value: 30}, 
        {key: 'charisma', value: 31}, 
        {key: 'defence', value: 20},
        {key: 'endurance', value: 23}, 
        {key: 'health', value: 45},
        {key: 'stealth', value: 15}, 
    ]
    expect(result).toStrictEqual(expected);
  });