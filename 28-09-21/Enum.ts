enum Print {
    no = 1,
    id,
    comment="great",
    rate = 20
}

function get(mName: string): Print {
    if (  mName === 'bharat' || mName === 'rishi') {
        return Print.comment;
    }
 }

let mediaType: Print = get('rishi'); 
 console.log(mediaType);
 
