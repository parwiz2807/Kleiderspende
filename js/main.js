


//  e. Kleider können entweder an der Geschäftsstelle des Vereins persönlich übergeben werden oder
// von einem Sammelfahrzeug abgeholt werden.

$(document).ready(function () {
  $("#optionB, #optionC").click(function () {
    $("#abholung").removeClass("hidden");
    $("#geschaeft").addClass("hidden");
  });

  $("#optionA").click(function () {
    $("#abholung").addClass("hidden");
    $("#geschaeft").removeClass("hidden");
  });
});



// h. Bei der Abholadresse ist zu prüfen, ob sie in der Nähe der Geschäftsstelle liegt. Dazu müssen die
// ersten beiden Postleitzahlen identisch sein.

$("#checkPostalCode").click(function () {
  var postalCode = $("#Postleitzahl").val();
  if (postalCode === "71125") {
    $("#postalCodeLabel").text("die Postleitzahl ist identisch ").addClass("text-success").removeClass("text-danger");
  } else {
    $("#postalCodeLabel").text("die Postleitzahl ist nicht identisch").addClass("text-danger").removeClass("text-success");
  }
});





// i. Ist eine Registrierung erfolgreich – egal ob vor Ort oder als Abholung, wird das den Nutzenden
// auf einer abschließenden Seite unter Angabe aller Daten (Art der Kleider, Krisengebiet, Datum,
// Uhrzeit und Ort) bestätigt.

$("#abholungsformular").click(function () {
  var fullName = $("#fullName").val();
  var telephone = $("#telephone").val();
  var strasse = $("#strasse").val();
  var Hausnummer = $("#Hausnummer").val();
  var Postleitzahl = $("#Postleitzahl").val();
  var Ort = $("#Ort").val();

  var countrySelect = $("#countrySelect").val();
  var kleidungSelect = $("#kleidungSelect").val();
  var colorSelect = $("#colorSelect").val();
  var sizeSelect = $("#sizeSelect").val();

  var printWindow = window.open('', '_blank');
  printWindow.document.write("<h2>Registrierungsformular</h2>");
  printWindow.document.write("<hr>");
  printWindow.document.write("<p><strong> Name:</strong> " + fullName + "</p>");
  printWindow.document.write("<p><strong>Telephone:</strong> " + telephone + "</p>");
  printWindow.document.write("<p><strong>Straße:</strong> " + strasse + "</p>");
  printWindow.document.write("<p><strong>Hausnummer:</strong> " + Hausnummer + "</p>");
  printWindow.document.write("<p><strong>Postleitzahl:</strong> " + Postleitzahl + "</p>");
  printWindow.document.write("<p><strong>Ort:</strong> " + Ort + "</p>");
  printWindow.document.write("<hr>");
  printWindow.document.write("<p><strong>Stadt:</strong> " + countrySelect + "</p>");
  printWindow.document.write("<p><strong>kleidung Art:</strong> " + kleidungSelect + "</p>");
  printWindow.document.write("<p><strong>Farbe:</strong> " + colorSelect + "</p>");
  printWindow.document.write("<p><strong>Größe:</strong> " + sizeSelect + "</p>");
  printWindow.document.write("<hr>");
  var now = new Date();
  var datetime = now.toLocaleString();
  printWindow.document.write('<p> Datum: ' + datetime + '</p>');

});



// i. Ist eine Registrierung erfolgreich – egal ob vor Ort oder als Abholung, wird das den Nutzenden
// auf einer abschließenden Seite unter Angabe aller Daten (Art der Kleider, Krisengebiet, Datum,
// Uhrzeit und Ort) bestätigt.

$("#geschaeftsstelleormular").click(function () {

  var countrySelect = $("#countrySelect").val();
  var kleidungSelect = $("#kleidungSelect").val();
  var colorSelect = $("#colorSelect").val();
  var sizeSelect = $("#sizeSelect").val();

  var printWindow = window.open('', '_blank');
  printWindow.document.write("<h2>Registrierungsformular</h2>");
  printWindow.document.write("<hr>");
  printWindow.document.write("<h3> Krisengebiet</h3>");
  printWindow.document.write("<p><strong>Stadt:</strong> " + countrySelect + "</p>");

  printWindow.document.write("<hr>");
  printWindow.document.write("<h3> Art der Kleider</h3>");
  printWindow.document.write("<p><strong>kleidung Art:</strong> " + kleidungSelect + "</p>");
  printWindow.document.write("<p><strong>Farbe:</strong> " + colorSelect + "</p>");
  printWindow.document.write("<p><strong>Größe:</strong> " + sizeSelect + "</p>");
  
  printWindow.document.write("<hr>");
  printWindow.document.write("<h3> Datum</h3>");
  var now = new Date();
  var datetime = now.toLocaleString();
  printWindow.document.write('<p> Datum: ' + datetime + '</p>');

});




// wie man mit jQuery das Absenden eines Formulars verhindern kannst, bevor leere Eingabefelder überprüft wurden:
$(document).ready(function () {
  $("form").submit(function (event) {
    $(this).find('input[type=text]').each(function () {
      if ($(this).val() === '') {
        event.preventDefault();
        alert("Bitte fülle alle Felder aus.");
        return false;
      }
    });
  });
});