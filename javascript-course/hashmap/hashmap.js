//hashmap factory function
function hashMap(){
    //initial hashmap size limit
    let hashMapSzLimit = 16;

    //creates a new hashmap
    const createHashMap = () => {
        const hashMap = [];
        for(let i = 0; i < hashMapSzLimit; i++){
            hashMap.push([]);
        }
        return hashMap;
    };

    //hashing function
    const hashingFunction = (string) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
            hashCode = (primeNumber * hashCode + string.charCodeAt(i)) % hashMapSzLimit;
        }
        
        return hashCode;
    };
    
    //checks if the index is out of bounds
    const outOfBounds = (index) => {
        if (index < 0 || index >= hashMapSzLimit){
            throw new Error("index out of bounds");
        }
    };

    //returns the current hash map's load factor
    const returnLoadFactor = () => {
        let loadFactor = 0;
        for(let i = 0; i < hashMapSzLimit; i++){
            loadFactor += createHashMap[i].length;
        }
        return loadFactor / hashMapSzLimit;
    };

    //iterators for the hashMap
    const hashMapValues = () => {
        const values = [];
        for(let i = 0; i < hashMapSzLimit; i++){
            for(let j = 0; j < createHashMap[i].length; j++){
                values.push(createHashMap[i][j].value);
            }
        }
        return values;
    };

    //if the hashMap is more than 75% full, double the size of the hashMap
    const handleLoadFactor = () => {
        if (calculateLoadFactor() < 0.75) {
            return;
        }
        hashMapSzLimit *= 2;
        //create new hashmap
        const newHashMap = createHashMap();
        //iterate through old hashmap
        let oldValues = hashMapValues();
        //rehash old values
        for(let i = 0; i < oldValues.length; i++){
            const index = hashingFunction(oldValues[i]);
            newHashMap[index].push(oldValues[i]);
        }
        //set new hashmap
        createHashMap = newHashMap;
    }


    return{
        createHashMap,
        hashingFunction,
        outOfBounds,
        returnLoadFactor,
        hashMapValues,
        handleLoadFactor
    };
}