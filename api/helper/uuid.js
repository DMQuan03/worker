const uuid = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, ue => {
    const Yi = Math.random() * 16 | 0;
    return (ue === "x" ? Yi : Yi & 3 | 8).toString(16)
})

module.exports = uuid