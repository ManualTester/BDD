function removeNonNumericCharacters(value: string): number {
    return Number(value.replace(/[^0-9.-]+/g, ''));
}

async function contributionSummaryTotalEstimatedValidation(Cash: number): Promise<void> {
    const securitiesText: string = await this.getText(await this.securitiesInTable());
    const totalEstimatedContributionText: string = await this.getText(await this.totalEstimatedContribution());

    const sharesValue: string = Data.EnterSharesPageContent.estimatedContributionForShares.replace(/\$/g, '');
    const lotsValue: string = Data.SharesLotsAndCashAccount.lotsValue.replace(/\$/g, '');

    const securitiesOfShares: number = removeNonNumericCharacters(securitiesText);
    const sharesValueNum: number = removeNonNumericCharacters(sharesValue);
    const lotsValueNum: number = removeNonNumericCharacters(lotsValue);

    expect(securitiesOfShares).to.equal(sharesValueNum + lotsValueNum);

    const totalEstimatedContributionNum: number = removeNonNumericCharacters(totalEstimatedContributionText);

    expect(securitiesOfShares + Cash).to.equal(totalEstimatedContributionNum);
}
