export const delay = timeStamp => ({ timeStamp, effect: "delay" });
export const call = (func, ...arg) => ({ func, arg, effect: "call" });
export const spawn = (func, ...arg) => ({ func, arg, effect: "spawn" });
export const fork = (func, ...arg) => ({ func, arg, effect: "fork" });
export const cancel = task => ({ task, effect: "cancel" });
