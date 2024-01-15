function orderByProps(object, ...sortKeys) {
    const {sortKeys, ...unsortedProperties} = object;

    const sortedProperties = unsortedProperties.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
          return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      
}