const service = {
    getSellers: ()=>{
        return Promise.resolve([
            {id: 1, name: "Test 1"},
            {id: 2, name: "Test 2"},
        ]);
    }
};


export default service;