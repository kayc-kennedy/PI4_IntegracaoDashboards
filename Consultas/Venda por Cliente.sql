-- Venda por Cliente
SELECT
	ite.codparc,
	par.nomeparc,
	par.razaosocial,
	SUM(ite.vlrtot) VLRTOTAL,
	SUM(ite.vlrtotcomdesc) VLRTOTALCOMDESC,
	SUM(ite.vlrdesctot) VLRTOTALDODESCONTO,
	COUNT(DISTINCT ite.codprod) MIXDEPRODUTO
FROM
	tgfite ite
	INNER JOIN tgfpar par ON (ite.codparc = par.codparc)
WHERE
	ite.dtneg BETWEEN /*Param 1 ->*/'2020-05-01' AND /*Param 2 ->*/'2020-06-30'
	/*AND ite.codvend =*/ /*Param 3*/
GROUP BY
	ite.codparc,
	par.nomeparc,
	par.razaosocial
ORDER BY
	SUM(ite.vlrtotcomdesc) DESC
