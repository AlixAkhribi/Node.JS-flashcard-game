// This will export our basic card constructor //
    var basicCard = function (front, back) {
    this.front = front;
    this.back = back;
}

exports.basicCard

// This will export our cloze card constructor // 
    var clozeCard = function (text, cloze, partial) {
    this.text = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...")
}


exports.clozeCard 
