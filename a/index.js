function load() {
	if (localStorage.watchedStory == undefined) {
		localStorage.watchedStory = 'true';
		id('story').innerHTML = "<marquee direction=\"up\" scrollamount=\"3\"><strong>b-Ocracy</strong><br /><br />In a place formerly known as <em>Earth</em>, the Z's controlled the land with an iron fist.<br /><br />Their ruler Zardanian II enslaved the natives of the Forgotten world.<br /><br />Amongst them were the A's, B's, C's, D's, E's, F's, and the great G's.<br /><br />Legend has it that the F's, and the tribes of D's drove out the Z's and a few A's who aligned them selves with their master.<br /><br />As a result the new government with representatives from all the nation's people chose the C's to be the land's capitol citizens.<br /><br />During this time a constitution was formed that limited the power of the King.<br /><br />In a peaceful 127 years, the C's lead the advancements in technology and science.<br /><br />The world seemed to be a Utopia, until an A assassin killed the nation's king, King Covaskavihn I.....<br /><br /><br /><br />The assassin's first decision as ruler was to abolish the constitution and reign terror on its subjects.<br /><br />The B's, and the D's tried to protest against the A's, G's, and E's, but they were eventually all exiled to an abandoned island.<br /><br />This caused the B's and the A's to start the Baritic War that lasted 38 years and 134 days<br /><br />During this war, some of the most famous heros of the age made their mark.<br /><br />Those heroes are<br /><br />Spiky B<br /><br />Electric B<br /><br />Shark B<br /><br />Awesome B<br /><br />Golden B<br /><br />Super B<br /><br />Knight B<br /><br />Dovahkinn B<br /><br />Classy B<br /><br />Muscle B<br /><br />Beku B<br /><br /><br /><br />With all of their efforts, in the battle of Aaolchiavit, the B's captured the city of the same name and won the war...<br /><br />They created a new constitution and peace was restored to the world once more...<br /><br />The B's led in the arts and culture, populations flourished and the Bs finally started to transform the world into ours.<br /><br />But<br /><br /><br />The<br /><br /><br />Story<br /><br /><br />Does<br /><br /><br />Not<br /><br /><br />End<br /><br /><br />There<br /><br /><br /><br /><br /><br /><br />No one.<br />Not even the other letters considered what happened to the A's.<br /><br />All of them were sent to prison, where the prisons overcrowded and many A's were forced into deep poverty, discrimination, and mistrust.<br /><br />Even the ones that had nothing to do with the terrible nonsense.<br /><br />The B's had promised that everyone got to be free and safe.<br /><br />Not only that....<br /><br />But the B's eventually started to be corrupt with the vast wealth and power they held.<br /><br />They changed the bOcracy into a centralist government.<br /><br />The B's ignored the constitution and powers of the president and tried to kill as many A's as possible.<br /><br />Finally a <em>supreme leader</em> for eternity<br /><br />Bashteviasche the XII changed the government into a Bictatorship.<br /><br />The B's encouraged letters to harass and torture any A's other citizens could find.<br /><br />The A's had enough.<br /><br /><br />It was time that the once villains, stop the true mastermind.<br /><br />It was time that Aonarchy needed to be formed.<br /><br />It was the time to fight the conquer over the A's.<br /><br />It was the time to team up with other citizens to conquer over the B's.<br /><br />It was the time to regain power over the evil Antagonists that weren't after all A's.<br /><br />It was the time to fight for your rights.<br /><br /><br /><br />It was the time to fight for your freedom, your life, and especially your country.<br /><br />So as a result, the spinoff b-Ocracy game was made to honor these poor lives of the righteous A's.<br /><br />So now.....<br /><br /><br /><br />It is the time...<br /><br /><br /><br />To fight.....<br /><br /><br /><br />For their freedom.....<br /><br />To achieve your leadership.....<br /><br />For their benefit....<br /><br /><br /><br /><br /><strong>b-Ocracy</strong><br /><br /><em>Fight the greatest uprising in the land of b-Ocracy!</em><br /><br /><br /><br /><br /><br /><em>Click anywhere to start playing</em><br /><br /><br /><br /><br /><br /><em>Click anywhere to start playing</em><br /><br /><br /><br /><br /><br /><em>Click anywhere to start playing</em><br /><br /><br /><br /><br /><br /><em>Click anywhere to start playing</em></marquee>";
	} else {
		id('story').style.display = "none";
		if (localStorage.whatsNew110 == undefined) {
			id('whatsNew').style.display = 'block';
			localStorage.whatsNew110 = 'true';
		}
	}
	id('wrapper').style.display = 'block';
	id('loader').style.display = 'none';
}