Zadanie 8. Restauracja - Lista dań (6 pkt)
Stwórz nowy projekt a w nim nowy komponent/komponenty reprezentujące Restauracje 
a w niej dania oferowane przez Restauracje. Zmodyfikuj tak kod aby nowy komponent 
był komponentem wyświetlanym na starcie naszej aplikacji. Komponent Dishes powinien 
wyświetlać listę dań. Lista dań powinna być zdefiniowana w pliku projektu zwierającym 
tylko fake data lub w zewnętrznym pliku. Pojedynczy obiekt typu Dish powinien zawierać
następujące pola: Nazwa dania, typ kuchni do której należy danie ( np. włoska, polska, 
indyjska, międzynarodowa, francuska itp.), typ i kategoria posiłku ( wegański, mięsny, zupa, 
dania główne, sałatki, przystawka, kolacja, śniadanie itp.), lista składników, max ilość dań 
możliwych do wydania danego dnia, cena dania, krótki opis dania oraz link do poglądowych 
zdjęć. 
Stwórz przynajmniej 12 obiektów i użyj ich w komponencie. 
Wyświetl zawartość tablicy obiektów w szablonie komponentu głównego - dyrektywa 
*ngFor (każda element odpowiednio wystyluj). Na liście dań proszę wyświetlić tylko jedno 
zdjecie dania. Reszta zdjęć zostanie użyta później w formie np. slajdera zdjeć
prezentującego szczegóły dania. Przy każdym produkcie powinny znajdować się 2 
przyciski + i - pozwalające na zamówienie dania (+) lub rezygnacje z zamówionego dania 
( przycisk -). 
Jeśli ilość dań znajdujących się w tablicy będzie wynosiła 0 to należy wyświetlić inny 
komunikat przy daniu niż gdy ilość dostępnych dań jest większa od 0. W przypadku gdy 
ilość dań spadnie do zera przycisk + powinien zostać ukryty. Nie możemy zamawiać 
przecież dania, którego restauracja nie jest w stanie wydać – dyrektywy ngStyle lub ngClass. 
Podobnie przy rezygnacji z zamówienia – ilość dań nie może przekroczyć max ilości dań 
zaplanowanych przez restauracje. 
Gdy ilość możliwych do wydania dań będzie zbliżała się do 0 ( np. od 3 w dół) należy 
zaznaczyć to w sposób graficzny np. inne tło, kolor czcionki, wielkość fontów lub inny 
wizualny sposób. Podobnie należy rozróżnić dnia najdroższe oraz najtańsze – za pomocą 
dodatkowego obramowania obejmującego dany produkt - zielone – najdroższy, czerwone 
najtańszy. 
Wypisz nazwę dania oraz nazwę kuchni kraj dużymi literami -> skorzystaj 
odpowiedniego typu pipe. 
Ze względu na szalejącą inflacje szefowie restauracji zdecydowali że wszystkie ceny mają
być podawane tylko w USD lub Euro. Wyświetl cenę dania wraz z nazwa (lub znakiem 
płatniczym) skojarzonym z walutą np. USD - $. 
Wyświetl również sumaryczną ilość aktualnie zarezerwowanych dań - jeśli wynosi on więcej 
niż 10 ma być wyświetlana na niebieskim tle, jeśli poniżej 10 na pomarańczowym tle. 
Uwaga!! Oceniać będę również zaproponowaną architekturę rozwiązania. Powinna być
zwinna i elastyczna – pamiętajmy o zasadzie SOLID. 
Zadanie 9. Usuwanie dania (1pkt) 
Rozszerz funkcjonalność aplikacji o możliwość usuwania dania. Zrealizuj tą funkcjonalność
poprzez dołożenie przycisku Usun obok dania. Naciśniecie tego przycisku powinno 
skutkować usunięciem dania z listy dań. 
Zadanie 10. Dodawanie dania (2pkt) 
Skoro jest możliwość usuwanie dania z listy, niech będzie także dostępna możliwość
dodawania nowego dania. Dodawania odbywa się za pomocą formularza – sugeruje 
zastosowanie formularza typu Model Driven Forms. Na razie podobnie jak z usuwaniem 
dania dostęp do tej funkcjonalności będą mieli wszyscy użytkownicy – potem tylko z 
odpowiednimi uprawnieniami. Zastosuj mechanizm walidacji. 
Zadanie 11. Ocena dania (1+1pkt) 
Rozszerzmy funkcjonalność pojedynczego dania o możliwość oceniania atrakcyjności 
dania przez klienta (np. wybór ilość gwizdek lub jakaś inna interesująca forma oceniania). 
Na razie oceniać dania będzie mógł każdy klient. Później po wprowadzeniu autoryzacji 
tylko osoba która kupiła danie. Docelowo funkcjonalność ta będzie dostępna tylko z 
poziomu karty poszczególnego dania. Preferowane samodzielna realizacja oceny bez 
korzystania z gotowych bibliotek. (1pkt) 
Zastanów się w jaki sposób zrealizujesz ocenę (oddzielny komponent? a może tylko 
atrybut komponentu Dish?) 
Zadanie 12. – filtrowanie listy dań 
Tworzymy dodatkowy komponent służący do filtrowania/ wyszukiwania dań pod katem 
wybranych kryteriów. Kryteriami po których możemy filtrować są: typ kuchni, cena (zakres), 
ocena, kategoria dania. Proponuje do realizacji tej funkcjonalności zastosowanie 
samodzielnie zdefiniowanych potoków. Sposób realizacji opisany w sekcji poniżej (1 pkt) 
Wersja rozszerzona 
Możliwość wyboru kilku wartości dla danego kryterium np. wybór kilku typów kuchni z 
listy dostępnych, wybór kilku kategorii produktu (np. sałatki, dania mięsne, kolacje) lub 
np. oceny 4 i 5 gwiazdek (1 pkt) 
Filtry zwierają tylko wartości dostępne w liście dań - dotyczy np. zakresu cen. Nie od 0 
do 100 tylko od dostępna cena minimalna do cena maksymalna – wartości powiązane 
z aktualnymi wynikami filtrowania. (1 pkt) 
Kryteria filtrowania można łączyć tzw. przykładowe kryteria filtrowania: interesują mnie 
dania o ocenie 3 i 4 gwiazdki należące do kuchni meksykańskiej i będące daniami 
wegańskimi. Wyniki filtrowania powinny być dostępne online już podczas wyboru wartości 
w filtrze. (1 pkt) 
Zadanie 13 Koszyk (1 pkt) 
Stwórz nowy komponent, niepowiązany z pozostałymi zawierający informacje o 
wybranych daniach, ich ilości oraz sumie całego zamówienia. Jej zawartość będzie 
powiązana z lista dań. Jeśli dodaje dania do koszyka pozycje w koszyku rosną, jeśli 
usuwam maleją. Usuniecie dania z listy powinno skutkować usunięciem dania z koszyka. 