
var dummyText = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat scelerisque blandit. Nulla facilisi. Pellentesque vitae placerat neque. In sit amet porta dui, ac blandit risus. Sed placerat ex tempor erat pulvinar laoreet. Curabitur turpis enim, porta eu elit non, porttitor posuere libero. Vestibulum nec sem neque. Aenean commodo eros quis scelerisque ornare. Morbi eleifend lobortis efficitur. Donec facilisis hendrerit fermentum. Ut mollis euismod quam sed tristique.",
                "Aliquam neque lectus, viverra sit amet diam ac, semper tempor odio. Integer vel pretium ligula. Integer cursus nibh at erat consequat posuere. Integer mi felis, eleifend sit amet gravida id, viverra vitae nibh. Donec at tortor purus. Morbi sit amet ex venenatis, pulvinar lectus in, convallis mauris. Fusce vel odio ut nunc sollicitudin malesuada.",
                "Nullam eget nisi nisl. Fusce pulvinar sem non libero dapibus, vel auctor ligula ornare. Praesent dapibus pulvinar dictum. Nam vitae sodales nisl, at pellentesque lacus. Aenean in tellus quis erat sagittis tincidunt. Curabitur at molestie erat, eu accumsan nunc. In pretium sit amet lectus at molestie. Maecenas maximus volutpat orci ac iaculis. In laoreet sed ante at euismod. Morbi rutrum scelerisque nulla, id semper mauris congue sit amet. Duis scelerisque mattis libero, et hendrerit mi aliquet in. Morbi eget mauris a augue ornare venenatis eu tristique nisl. Ut mauris purus, bibendum eu mauris id, suscipit vestibulum ipsum.",
                "Nullam in lectus id justo vestibulum volutpat at sit amet nulla. Nam ac erat pharetra, tincidunt tellus sed, vehicula urna. Vivamus velit lacus, malesuada pretium turpis ac, ullamcorper mattis mi. Aenean pellentesque maximus imperdiet. Morbi eu sagittis metus, sed viverra ligula. Etiam consequat tellus ligula, et consequat enim faucibus quis. Cras elit eros, dictum et ante sed, pretium consequat erat. Morbi ornare mauris in eros rhoncus, vitae venenatis augue maximus. Vivamus semper egestas fermentum. In eu elit sodales, tincidunt sapien non, suscipit orci. Suspendisse ut consequat leo. Curabitur tincidunt nisl ut enim consequat, ut venenatis magna sollicitudin. Proin a bibendum massa. Etiam arcu orci, luctus eu rutrum quis, interdum a diam.",
                "Nam malesuada, mauris quis semper vulputate, mauris elit vehicula felis, laoreet pretium purus orci tristique arcu. In hac habitasse platea dictumst. Sed risus tellus, dapibus ut semper non, posuere quis sem. Vivamus felis ipsum, pellentesque pharetra libero ut, suscipit bibendum libero. Morbi laoreet venenatis diam, eu sagittis nisl sollicitudin ac. Sed rutrum odio ullamcorper, tincidunt ipsum vel, pharetra lacus. Donec ullamcorper, dui quis lacinia porta, est nisi posuere dolor, sed rhoncus nisi nisl vel turpis. Pellentesque ornare urna vel nunc aliquam, et mattis velit imperdiet. Integer sed vulputate sapien, ac aliquam mi.",
                "Integer sollicitudin gravida risus eu elementum. Pellentesque lacinia tempor justo, nec blandit neque auctor ac. Curabitur quis leo nec lorem pellentesque lacinia ornare at purus. Suspendisse rutrum placerat odio ut dapibus. Nam et ex commodo, consectetur ligula id, feugiat orci. Curabitur quis lacus euismod mi convallis eleifend ut at leo. Maecenas a imperdiet quam, nec finibus elit. Vivamus placerat tellus at leo lacinia blandit. Nulla ullamcorper consequat augue ut faucibus. Nulla nec neque maximus, aliquet enim ac, elementum enim. Curabitur venenatis faucibus feugiat.",
                "Vivamus iaculis elementum risus sit amet tempus. Nam magna sapien, consectetur vitae magna eget, varius commodo mauris. Nunc sodales dolor pharetra, condimentum massa sit amet, interdum tortor. Vivamus euismod ultrices ex, id consectetur risus pulvinar nec. Pellentesque eu lobortis sapien. Vivamus ipsum odio, hendrerit non lobortis sed, blandit eget ipsum. Vestibulum placerat molestie cursus. Etiam nisl tortor, hendrerit ut molestie eget, consectetur quis lorem.",
                "Duis tempor eget magna at venenatis. Fusce id vulputate ipsum, in semper urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer malesuada, justo id porttitor consectetur, nunc tortor porta tellus, vel porttitor magna neque non risus. Aenean nec porttitor ante, porta hendrerit nisi. Nulla facilisi. Phasellus dapibus sem ut elit facilisis luctus. Nam porta tortor quis ex sollicitudin, sit amet rhoncus est congue.",
                "Etiam at sem vel odio tempus egestas id ut nisl. Quisque ultrices quam sit amet velit rhoncus, a porttitor mauris hendrerit. Quisque semper ex vitae ultricies elementum. Nulla enim libero, efficitur id erat id, iaculis mattis elit. Proin justo sapien, gravida porta dapibus sed, consequat quis mauris. Mauris pulvinar ex in leo pretium, eu ultricies ligula blandit. Nulla varius libero a lorem efficitur, ut bibendum augue convallis. Integer aliquet, eros id mattis viverra, lacus felis eleifend dolor, at porta metus tellus a leo. Nulla facilisi. Proin laoreet turpis rutrum justo pretium dapibus. Praesent consequat ex nec ante consequat luctus. Vivamus eget auctor leo. Ut sit amet dictum elit.",];

var dummyBody = $(".dummy_body");

var number = $("#number");

var button = $("#button");

var genaretText = $(".genaret_text");

button.click(function(){
    var value = parseInt(number.val());

    var rendom = Math.floor(Math.random() * dummyText.length);

    if(isNaN(value)|| value <= 0 || value >9 ){
        genaretText.text(dummyText[rendom]);
    }else{
        var sliceArray = dummyText.slice(0 , value);
        var finalArray = sliceArray.map(function(singleArray){

           return(singleArray);
        }).join("");

        genaretText.text(finalArray);
    }
    

});