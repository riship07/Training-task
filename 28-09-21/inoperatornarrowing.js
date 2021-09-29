function main(name) {
    if ("code" in name) {
        console.log(name);
    }
    else if ("id" in name) {
        console.log(name);
        console.log("id");
    }
    else {
        console.log("error");
    }
}
main({ id: 11 });
main({ code: "sher" });
