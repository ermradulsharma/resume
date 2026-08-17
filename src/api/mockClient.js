const simulateNetworkDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchMockData = async (dataModule, key) => {
    await simulateNetworkDelay();
    // Some JSON modules export the default object, while some have keys.
    // Ensure we safely return the data
    const data = dataModule.default || dataModule;
    return key ? data[key] : data;
};
